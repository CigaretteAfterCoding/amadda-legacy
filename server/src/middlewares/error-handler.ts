/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { CustomError } from 'Errors/custom-error';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof CustomError) {
    res.status(err.statusCode);
    res.json({ error: { message: err.message } });
    return;
  }

  console.error('[unmanaged error type] : ', err);
  res.json('');
}
