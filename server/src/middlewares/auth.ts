import { AlreadySignedInError, AuthenticateError } from 'Errors/authenticate-error';
import { NextFunction, Request, Response } from 'express';

export function isSignedIn(req: Request, res: Response, next: NextFunction): void {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
    return;
  }
  next(new AuthenticateError());
}

export function isNotSignedIn(req: Request, res: Response, next: NextFunction): void {
  if (!req.headers['authorization']) {
    next();
    // return;
  }
  // next(new AlreadySignedInError());
}
