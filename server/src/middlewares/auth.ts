import { STATUS_CODE } from 'build/constants';
import { ERROR_RESPONSE } from 'Constants';
import { AlreadySignedInError, AuthenticateError } from 'Errors/authenticate-error';
import { NextFunction, Request, Response } from 'express';

export function isSignedIn(req: Request, res: Response, next: NextFunction): void {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
    return;
  }

  res.status(STATUS_CODE.NO_TOKEN).json(ERROR_RESPONSE.UNAUTHORIZED);
  next(new AuthenticateError());
  return;
}

export function isNotSignedIn(req: Request, res: Response, next: NextFunction): void {
  if (!req.isAuthenticated()) {
    next();
    return;
  }
  // res.status(STATUS_CODE.NO_PERMISSION).json(ERROR_RESPONSE.ALREADY_SIGNED_IN);
  // next(new AlreadySignedInError());
}
