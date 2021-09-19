export interface User {
  id?: number | null;
  email: string;
  nickname: string;
  profile_image: string;
}

// export interface UserWithToken extends User {
//   access_token: string;
// }

export interface UserWithToken {
  id: number | null;
  email: string;
  nickname: string;
  profile_image: string;
  access_token: string;
}