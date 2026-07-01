/**
 * Contains functions for handling HTTP requests and responses for the "/books" endpoint
 */
import { NextFunction, Request, Response } from 'express';
import BookModel from "../models/Book.model"
import { IBook } from "../types/interfaces/Book.interface";
import { getAllCallback, getOneCallback } from ".";


export const getAll = (request: Request, response: Response) => {
    BookModel.getAll((err: Error, data: IBook[])=> getAllCallback(response, err, data))
}


export const getByTitle = async (request: Request, response: Response, next: NextFunction) => {
    try{
        const book: any = await BookModel.getByTitle(request.params.title)  
        getOneCallback(response, null, book)
    }catch(err){
        next(err)
    }
   
}
