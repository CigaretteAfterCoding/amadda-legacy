import { NextFunction, Request, Response } from 'express';
import UserRepo from 'Model/user-model';
import { createJWT, createRefreshJWT } from 'Utils/jwt';
import bcrypt from 'bcryptjs';
import { STATUS_CODE } from 'Constants';
import { DuplicateIdError } from 'Errors/authenticate-error';

export async function signUpWithEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { email, password } = req.body;

  const user = await UserRepo.findByEmail(email);

  if (user) {
    next(new DuplicateIdError());
    return;
  }

  const hash = await bcrypt.hash(password, 12);
  const nickname = email.split('@')[0];

  const insertId = await UserRepo.createUser({
    email,
    nickname,
    password: hash,
  });

  const accessToken = createJWT({ id: insertId, email, nickname });
  const refreshToken = createRefreshJWT({ id: insertId, email, nickname });
  res.cookie('refreshToken', refreshToken);

  res.status(STATUS_CODE.CREATED).json({ id: insertId, email, nickname, accessToken });
}

export async function signInWithEmail(req: Request, res: Response): Promise<void> {
  const { id, email, nickname }: any = req.user;
  const accessToken = createJWT({ id, email, nickname });
  const refreshToken = createRefreshJWT({ id, email, nickname });
  res.cookie('refreshToken', refreshToken);

  const signInWithEmailResponse = { id, email, nickname, accessToken };
  res.status(200).json(signInWithEmailResponse);
}

export async function refreshTokens(req: Request, res: Response): Promise<void> {
  const { id, email, nickname }: any = req.user;
  const accessToken = createJWT({ id, email, nickname });
  const refreshToken = createRefreshJWT({ id, email, nickname });
  res.cookie('refreshToken', refreshToken);
  res.status(200).json({ accessToken });
}

export async function getCurrentUser(req: Request, res: Response): Promise<void> {
  const { id, email, nickname }: any = req.user;
  res.status(200).json({ id, email, nickname });
}
