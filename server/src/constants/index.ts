export const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NO_TOKEN: 401,
  NOT_FOUND: 404,
  NO_PERMISSION: 403,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

export const JWT_EXPIRATION_TIME = '600s';

export const ERROR_RESPONSE = {
  ID_ALREADY_EXISTS: {
    errors: [
      {
        type: 'ID_ALREADY_EXISTS',
        message: '아이디가 이미 존재합니다.',
      },
    ],
  },
  UNAUTHORIZED: {
    errors: [
      {
        type: 'UNAUTHORIZED',
        message: '로그인을 해주세요.',
      },
    ],
  },
  ALREADY_SIGNED_IN: {
    errors: [
      {
        type: 'ALREADY_SIGNED_IN',
        message: '이미 로그인되어 있습니다.',
      },
    ],
  },
};