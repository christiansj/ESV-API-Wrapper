import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../types/responses';
import { InvalidRequestError } from '../types';

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  error: AppError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
    if(error instanceof InvalidRequestError){
        const payload = ErrorResponse(error.message, error.errorCode)
        return response.status(error.errorCode).json(payload)
    }
  console.error(error);
  response.status(error.status || 500)
    .json(ErrorResponse(error.message || "Internal server error", 500));
};