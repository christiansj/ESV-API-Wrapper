/**
 * Contains functions for handling HTTP requests and responses for the "/passage" endpoint
 */
import { Request, Response } from 'express';
import PassageModel from '../models/Passage.model';
import { InvalidRequestError } from '../types';
import { getCountWithTitle } from '../models/Book.model';
import { ErrorResponse } from '../responses';
interface PassageParam {
    bookTitle: string,
    verseStart: number,
    verseEnd: number
}



function parsePassageParam(passage: string): PassageParam{
    const tokens = passage.split(' ')
    const bookTitle = tokens.slice(0, tokens.length-1).join(" ")
    const verses = tokens[tokens.length - 1]

    
    const verseRegex = /^\d{1,2}(\:\d{1,2}(-\d{1,2}){0,1}){0,1}$/
    if(!verseRegex.test(verses)){
        throw new InvalidRequestError("Invalid verse format. Valid verse examples: \"3:16\", \"3:1-11\"", 400);
    }

    let verseStart, verseEnd: number;
    const verseTokens = verses.split(":");;
    const verseRange = verseTokens[1]
    if(verseRange.includes("-")) {
        const rangeTokens = verseRange.split("-")
        verseStart = rangeTokens[0]
        verseEnd = Number(rangeTokens[1])
    } else {
        verseStart = verseRange
        verseEnd = Number(verseRange)
    }    

    return {bookTitle, verseStart, verseEnd};
}



async function validatePassageParam(passageParam: PassageParam){
    const {bookTitle, verseStart, verseEnd} = passageParam;

    return new Promise((resolve, reject)=>{
        console.log(`Invalid verse range of ${verseStart}-${verseEnd}`)
        if(verseStart > verseEnd){
            throw new InvalidRequestError(`Invalid verse range of ${verseStart}-${verseEnd}`, 400);
        }


        getCountWithTitle(bookTitle)
        .then(count=>{
            if(count == 0) {
                throw new InvalidRequestError(`Book "${bookTitle} was not found."`, 404)
            }



            resolve("good")
        })
        .catch((requestError: InvalidRequestError)=>{
            console.log("catch 22")
            reject(requestError)
        })
    })
}

export const getPassage = async (request: Request, response: Response) => {
    const {passage} = request.params;
    try{
        const passageParams = parsePassageParam(passage)
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


    PassageModel.getPassage(passage, (err, data)=>{
        response.send(passage)
    })
}