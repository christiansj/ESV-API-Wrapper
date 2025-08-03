/**
 * Passage model class contains functionality for fetching data from the MySQL database.
 */
import { ResultCallback } from '../types';

// Constructor
const PassageModel = function () {};

PassageModel.getPassage = (passage: string, resultCallback: ResultCallback): void => {
    resultCallback(null, "Work in Progress");
}

export default PassageModel;