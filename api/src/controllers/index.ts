/**
 * Contains functions for handling HTTP requests and responses for the "/books" endpoint
 */
import Book from "../models/Book.model"
import { Request, Response } from 'express';
import {DataResponse, ErrorResponse} from '../responses';

export const getAllCallback = (response: Response, err: Error | null, data: any) => {
    if(err){
        response.status(500).json(ErrorResponse(err.message))
        return;
    }
    response.json(DataResponse(data))
}

