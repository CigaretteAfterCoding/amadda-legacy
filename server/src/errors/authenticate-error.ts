import { CustomError } from 'Errors/custom-error';

export class AuthenticateError extends CustomError {
  public statusCode = 401;

  constructor() {
    super('로그인을 해주세요');
  }
}

export class DuplicateIdError extends CustomError {
  public statusCode = 409;

  constructor() {
    super('아이디가 이미 존재합니다.');
  }
}

export class AlreadySignedInError extends CustomError {
  public statusCode = 403;

  constructor() {
    super('이미 로그인되어 있습니다');
  }
}
