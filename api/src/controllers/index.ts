/**
 * Contains reusable functions for returning HTTP responses to the client.
 */
import { Response } from 'express';
import {DataResponse, ErrorResponse} from '../responses';

export const getAllCallback = (response: Response, err: Error | null, data: any) => {
    if(err){
        response.status(500).json(ErrorResponse("Internal server error", 500))
        throw err;
    }
    response.json(DataResponse(data))
}

export const getOneCallback = (response: Response, err: Error, data: Array<any>) =>{
    if(err){
        response.status(500).json(ErrorResponse("Internal server error", 500));
        throw err;
    } else if (data.length == 0){
        response.status(404).json(ErrorResponse("Resource not found", 404))
    } 
    else{
        response.json(data);
    }
}
