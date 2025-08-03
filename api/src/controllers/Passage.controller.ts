/**
 * Contains functions for handling HTTP requests and responses for the "/passage" endpoint
 */
import { Request, Response } from 'express';
import PassageModel from '../models/Passage.model';

interface PassageParam {
    book: string,
    verseStart: number,
    verseEnd: number
}


function parsePassageParam(passage: string): PassageParam{
    const tokens = passage.split(' ')
    const book = tokens.slice(0, tokens.length-1).join(" ")
    const verses = tokens[tokens.length - 1]
    console.log("Book:", book, "Verses:", verses)
    
    const verseRegex = /^\d{1,2}(\:\d{1,2}(-\d{1,2}){0,1}){0,1}$/
    if(!verseRegex.test(verses)){
        // throw invalid passage format
    }
   
    // get verse start and end here

    // return PassageParam value

    return null;
}


export const getPassage = (request: Request, response: Response) => {
    const {passage} = request.params;
    parsePassageParam(passage)
    

    PassageModel.getPassage(passage, (err, data)=>{
        response.send(passage)
    })
}