import { User } from 'Types/user';
import { amaddaApi } from './baseAPI';

let refreshTimeoutId: ReturnType<typeof setTimeout>;

interface SignUpParams {
  email: string;
  password: string;
}

interface SignUpResponse extends User {
  access_token: string;
}

async function signUp({
  email,
  password,
}: SignUpParams): Promise<SignUpResponse> {
  try {
    const { data } = await amaddaApi.post<SignUpResponse>('/user/sign-up', {
      email,
      password,
    });

    amaddaApi.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${data.access_token}`;
    refreshTimeoutId = setTimeout(refreshAccessTokens, 500000);

    return data;
  } catch (error) {
    return error.response.data;
  }
}

type SignInParams = SignUpParams
type SignInResponse = SignUpResponse

async function signIn({
  email,
  password,
}: SignInParams): Promise<SignInResponse> {
  try {
    const { data } = await amaddaApi.post('/user/sign-in', {
      email,
      password,
    });

    amaddaApi.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${data.access_token}`;
    refreshTimeoutId = setTimeout(refreshAccessTokens, 500000);

    return data;
  } catch (error) {
    return error.response.data;
  }
}

// API 호출을 위한 함수는 아니지만, signIn과 나란히 두기 위해 여기에 배치
function signOut(): void {
  delete amaddaApi.defaults.headers.common['Authorization'];
  clearTimeout(refreshTimeoutId);
  console.log('로그아웃 되었습니다');
}

interface RefreshAccessTokensResponse {
  accessToken: string;
}

async function refreshAccessTokens(): Promise<void> {
  const { data } = await amaddaApi.post<RefreshAccessTokensResponse>(
    '/user/silent-refresh',
  );
  amaddaApi.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${data.accessToken}`;
  refreshTimeoutId = setTimeout(refreshAccessTokens, 10000);
}

type GetCurrentUserResponse = User

async function getCurrentUser() {
  try {
    const { data } = await amaddaApi.get<GetCurrentUserResponse>('/user');
    return data;
  } catch (error) {
    return error.response.data;
  }
}

export default {
  signUp,
  signIn,
  signOut,
  refreshAccessTokens,
  getCurrentUser,
};
