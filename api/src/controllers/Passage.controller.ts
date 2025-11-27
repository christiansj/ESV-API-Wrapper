/**
 * Contains functions for handling HTTP requests and responses for the "/passage" endpoint
 */
import { Request, Response } from 'express';
import PassageModel from '../models/Passage.model';
import BookModel from '../models/Book.model'
import { InvalidRequestError } from '../types';
import { getChaptersQuery, getCountWithTitle } from '../models/Book.model';
import { ErrorResponse } from '../responses';
import { IEsvApiResponse, IPassageData } from '../interfaces/Passage.interface';
import { getAllCallback, getOneCallback } from '.';

interface PassageParam {
    bookTitle: string,
    chapter: number,
    verseStart: number,
    verseEnd: number
}


async function parsePassageParam(passage: string): Promise<PassageParam>{
    const tokens = passage.split(' ')
    const bookTitle = tokens.slice(0, tokens.length-1).join(" ")
    var verses = tokens[tokens.length - 1]

    const verseRegex = /^\d{1,2}(\:\d{1,2}(-\d{1,2}){0,1}){0,1}$/
    if(!verseRegex.test(verses)){
        throw new InvalidRequestError("Invalid verse format. Valid verse examples: \"3:16\", \"3:1-11\"", 400);
    }

    
    
    // full chapter
    // TODO add fix for chapter out of range
    if(!verses.includes(":")){
        const verseCount =  await BookModel.getChapterVerseCount(bookTitle, parseInt(verses))
        if(verseCount == null){
            console.log("chap not found. :(")
        }
        verses = verses.concat(`:1-${verseCount}`)
    }

    const verseTokens = verses.split(":");
    const chapter = Number(verseTokens[0]);

    let verseStart, verseEnd: number;
 
    const verseRange = verseTokens[1];

    if(verseRange.includes("-")) {
        const rangeTokens = verseRange.split("-")
        verseStart = rangeTokens[0]
        verseEnd = Number(rangeTokens[1])
    } else {
        verseStart = verseRange
        verseEnd = Number(verseRange)
    }    

    return {chapter, bookTitle, verseStart, verseEnd};
}

async function validateVerseRange(passageParam: PassageParam) {
    interface ChapterRow {
        number: number,
        verseCount: number
    }

    return new Promise((resolve, reject)=>{
        getChaptersQuery(passageParam.bookTitle)
        .then((result: Array<ChapterRow>)=>{
            const chapter = result.find(chapter => chapter.number === passageParam.chapter);

            if(!chapter){
                throw new InvalidRequestError(`Invalid chapter of ${passageParam.chapter}`, 400);
            } else if(passageParam.verseEnd > chapter.verseCount){
                throw new InvalidRequestError(`Invalid verse of ${passageParam.verseEnd}`, 400);
            }
            resolve(result)
        })
        .catch(err=>reject(err))
    })
}


async function validatePassageParam(passageParam: PassageParam){
    const {bookTitle, verseStart, verseEnd} = passageParam;
    const count  = await getCountWithTitle(bookTitle)

    if(count == 0) {
        throw new InvalidRequestError(`Book "${bookTitle}" was not found.`, 404)
    } else if(verseStart > verseEnd){
        throw new InvalidRequestError(`Invalid verse range of ${verseStart}-${verseEnd}`, 400);
    }

    return new Promise((resolve, reject)=>{
        validateVerseRange(passageParam)
        .then(result=>{
            resolve(true)
        })     
        .catch(err=>{
            console.error("InvalidRequestError")
            reject(err)
        })
    })
}

export const getPassage = async (request: Request, response: Response) => {
    const {passage} = request.params;

    try{
        const passageParams = await parsePassageParam(passage)
        await validatePassageParam(passageParams)
    } catch(error){
        if(error instanceof InvalidRequestError){
            const payload = ErrorResponse(error.message, error.errorCode)
            response.status(error.errorCode).json(payload)
            return;
        }
        console.error(error)
        response.status(500).send("Internal Server Error.")
        // throw error;
    }
    PassageModel.getPassage(passage, (err, data: IEsvApiResponse)=>{
        if(err){
            throw err;
        }
        const payload: IPassageData = {
            query: passage,
            passage: data.passages[0]
        }
        getAllCallback(response, err, payload)
        // response.send(data)
    })
}