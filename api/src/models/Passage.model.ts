/**
 * Passage model class contains functionality for fetching data from the MySQL database.
 */
import { ResultCallback } from '../types';
import EsvService from '../services/EsvService';
import { InvalidRequestError } from '../types';
import BookModel from '../models/Book.model'

// Constructor
const PassageModel = function () {};

export async function getVerseRange(bookTitle: string, verses: string) {
    if(!verses.includes(":")){
        const verseCount =  await BookModel.getChapterVerseCount(bookTitle, parseInt(verses))
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
    
    return {chapter, verseStart, verseEnd}
}

PassageModel.getPassage = (passage: string, resultCallback: ResultCallback): void => {
    const esvService = new EsvService()
    esvService.fetchVerse(passage)
    .then(result=>{
        resultCallback(null, result);
    })
    .catch(err=>{
        resultCallback(err, null)
    })
    
}

export default PassageModel;