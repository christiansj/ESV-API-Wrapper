/**
 * Contains functions for handling HTTP requests and responses for the "/pet-types" endpoint
 */

import Book from "../models/Book.model"
import { Request, Response } from 'express';

export const getAll = (request: Request, response: Response) => {
    Book.getAll((err, data)=> {
        if(err){
            response.status(500).json({message: "Internal server error"})
            return;
        }
        response.json(data)
    })
}