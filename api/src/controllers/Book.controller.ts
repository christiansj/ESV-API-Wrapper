/**
 * Contains functions for handling HTTP requests and responses for the "/books" endpoint
 */

import Book from "../models/Book.model"
import { Request, Response } from 'express';
import {DataResponse, ErrorResponse} from '../responses';
import { getAllCallback, getOneCallback } from ".";

export const getAll = (request: Request, response: Response) => {
    Book.getAll((err, data)=> getAllCallback(response, err, data))
}

export const getByTitle = (request: Request, response: Response) => {
    Book.getByTitle(request.params.title, (err, data: Array<any>)=>
        getOneCallback(response, err, data));   
}
