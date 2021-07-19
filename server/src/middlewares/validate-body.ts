import { Request, Response, NextFunction } from 'express';
import { InsufficientBodyError } from 'Errors/Insufficient-body';

export const validateBody = <T>(keys: (keyof T)[]) => (req: Request, res: Response, next: NextFunction): void => {
  const { body } = req;

  for (const key of keys) {
    if (body[key] !== undefined) {
      continue;
    }

    next(new InsufficientBodyError(key as string));
  }

  next();
};
