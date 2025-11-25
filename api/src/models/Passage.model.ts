/**
 * Passage model class contains functionality for fetching data from the MySQL database.
 */
import { ResultCallback } from '../types';
import EsvService from '../services/EsvService';
// Constructor
const PassageModel = function () {};

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