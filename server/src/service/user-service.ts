/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import UserRepo from 'Model/user-model';
import { createJWT, createRefreshJWT } from 'Utils/jwt';
import bcrypt from 'bcryptjs';
import { ERROR_RESPONSE, STATUS_CODE } from 'Constants';

export async function signUpWithEmail(req: Request, res: Response, _next: NextFunction): Promise<void> {
  const { email, password } = req.body;

  const user = await UserRepo.findByEmail(email);

  if (user) {
    res.status(STATUS_CODE.CONFLICT).json(ERROR_RESPONSE.ID_ALREADY_EXISTS);

    return;
  }

  const hash = await bcrypt.hash(password, 12);
  const nickname = email.split('@')[0];
  const profile_image = 'random_image';

  const insertId = await UserRepo.createUser({
    email,
    nickname,
    password: hash,
    profile_image,
  });

  const accessToken = createJWT({ id: insertId, email, nickname });
  const refreshToken = createRefreshJWT({ id: insertId, email, nickname });
  res.cookie('refreshToken', refreshToken);

  res.status(STATUS_CODE.CREATED).json({ id: insertId, email, nickname, profile_image, access_token: accessToken });
}

export async function signInWithEmail(req: Request, res: Response): Promise<void> {
  const { id, email, nickname }: any = req.user;
  const accessToken = createJWT({ id, email, nickname });
  const refreshToken = createRefreshJWT({ id, email, nickname });
  const signInWithEmailResponse = { id, email, nickname, access_token: accessToken };

  res.cookie('refreshToken', refreshToken);
  res.status(200).json(signInWithEmailResponse);
}

export async function refreshTokens(req: Request, res: Response): Promise<void> {
  const { id, email, nickname }: any = req.user;
  const accessToken = createJWT({ id, email, nickname });
  const refreshToken = createRefreshJWT({ id, email, nickname });
  res.cookie('refreshToken', refreshToken);
  res.status(200).json({ access_token: accessToken });
}

export async function getCurrentUser(req: Request, res: Response): Promise<void> {
  const { id, email, nickname, profile_image }: any = req.user;
  res.status(200).json({ id, email, nickname, profile_image });
}
