import { Request, Response, NextFunction } from 'express';
import { verifyJWT, verifyRefreshJWT } from 'Utils/jwt';
import { AuthenticateError } from 'Errors/authenticate-error';
import { ERROR_RESPONSE, STATUS_CODE } from 'Constants';

export const TOKEN_KEY = 'authorization';

export function decodeJWT(req: Request, res: Response, next: NextFunction): void {
  if (!req.headers[TOKEN_KEY]) {
    res.status(STATUS_CODE.NO_TOKEN).json(ERROR_RESPONSE.UNAUTHORIZED);
    next(new AuthenticateError());
    return;
  }
  const token = (req.headers[TOKEN_KEY] as string).split(' ')[1];
  const user = verifyJWT(token as string);
  req.user = user as Express.User;
  next();
  return;
}

export function decodeRefreshJWT(req: Request, res: Response, next: NextFunction): void {
  if (!req.cookies.refreshToken) {
    res.status(STATUS_CODE.NO_TOKEN).json(ERROR_RESPONSE.UNAUTHORIZED);
    next(new AuthenticateError());
    return;
  }
  const user = verifyRefreshJWT(req.cookies.refreshToken as string);
  req.user = user as Express.User;
  next();
  return;
}
