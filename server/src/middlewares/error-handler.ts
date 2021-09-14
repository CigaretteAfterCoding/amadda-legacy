/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { CustomError } from 'Errors/custom-error';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof CustomError) {
    const errorResponse = {
      errors: [
        {
          type: err.type,
          message: err.message,
        },
      ],
    };

    res.status(err.statusCode);
    res.json(errorResponse);
    return;
  }

  console.error('[unmanaged error type] : ', err);
  res.json('');
}
