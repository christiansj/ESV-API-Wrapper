/**
 * Contains functions for handling HTTP requests and responses for the "/books" endpoint
 */
import { Request, Response } from 'express';
import BookModel from "../models/Book.model"
import { IBook } from "../types/interfaces/Book.interface";
import { getAllCallback, getOneCallback } from ".";


export const getAll = (request: Request, response: Response) => {
    BookModel.getAll((err: Error, data: IBook[])=> getAllCallback(response, err, data))
}


export const getByTitle = (request: Request, response: Response) => {
    BookModel.getByTitle(request.params.title, (err: Error, data: IBook[])=>
        getOneCallback(response, err, data));   
}
