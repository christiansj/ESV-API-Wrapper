/**
 * Contains functions for handling HTTP requests and responses for the "/books" endpoint
 */

import Book from "../models/Book.model"
import { Request, Response } from 'express';
import {DataResponse, ErrorResponse} from '../responses';
import { getAllCallback } from ".";

export const getAll = (request: Request, response: Response) => {
    Book.getAll((err, data)=> getAllCallback(response, err, data))
}

export const getByTitle = (request: Request, response: Response) => {
    Book.getByTitle(request.params.title, (err, data: Array<any>)=>{
        if(err){
            response.status(500).json({"message": "Internal Server Error"});
        } else if (data.length == 0){
            response.status(404).json({"message": "Resource not found"})
        } 
        else{
            response.json(data);
        }
    });   
}
