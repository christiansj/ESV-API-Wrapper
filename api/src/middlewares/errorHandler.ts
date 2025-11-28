import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../types/responses';

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(err.status || 500)
    .json(ErrorResponse(err.message || "Internal server error", 500));
};