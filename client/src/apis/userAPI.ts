import { AlreadySignedInErrorResponse, IdAlreadyExistsErrorResponse, UnauthorizedErrorResponse } from 'Types/errors';
import { User, UserWithToken } from 'Types/user';
import { amaddaApi } from './baseAPI';

let refreshTimeoutId: ReturnType<typeof setTimeout>;
const refreshDelay = 1000 * 60 * 50;

interface SignUpParams {
  email: string;
  password: string;
}

// 임시방편
type SignUpResponse = UserWithToken & IdAlreadyExistsErrorResponse;

async function signUp({
  email,
  password,
}: SignUpParams): Promise<SignUpResponse | void> {
  try {
    const { data } = await amaddaApi.post<SignUpResponse>('/user/sign-up', {
      email,
      password,
    });

    amaddaApi.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${data.access_token}`;
    localStorage.setItem('access_token', data.access_token);
    refreshTimeoutId = setTimeout(refreshAccessTokens, refreshDelay);

    return data;
  } catch (error) {
    console.error(error);
  }
}

type SignInParams = SignUpParams

// 임시방편
type SignInResponse = UserWithToken & AlreadySignedInErrorResponse;

async function signIn({
  email,
  password,
}: SignInParams): Promise<SignInResponse | void> {
  try {
    const { data } = await amaddaApi.post<SignInResponse>('/user/sign-in', {
      email,
      password,
    });

    amaddaApi.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${data.access_token}`;
    localStorage.setItem('access_token', data.access_token);
    refreshTimeoutId = setTimeout(refreshAccessTokens, refreshDelay);

    return data;
  } catch (error) {
    console.error(error);
  }
}

// API 호출을 위한 함수는 아니지만, signIn과 나란히 두기 위해 여기에 배치
function signOut(): void {
  delete amaddaApi.defaults.headers.common['Authorization'];
  clearTimeout(refreshTimeoutId);
  localStorage.removeItem('access_token');
  console.log('로그아웃 되었습니다');
}

interface RefreshAccessTokensResponse {
  access_token: string;
}

async function refreshAccessTokens(): Promise<void> {
  const { data } = await amaddaApi.post<RefreshAccessTokensResponse>(
    '/user/silent-refresh',
  );
  amaddaApi.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${data.access_token}`;
  localStorage.setItem('access_token', data.access_token);
  refreshTimeoutId = setTimeout(refreshAccessTokens, 10000);
}

// type GetCurrentUserResponse = UserWithToken | UnauthorizedErrorResponse;
type GetCurrentUserResponse = User;

async function getCurrentUser() {
  try {
    const { data } = await amaddaApi.get<GetCurrentUserResponse>('/user');
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  signUp,
  signIn,
  signOut,
  refreshAccessTokens,
  getCurrentUser,
};
