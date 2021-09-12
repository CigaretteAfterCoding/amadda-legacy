import { atom } from 'recoil';
import { User } from 'Types/user';

interface UserState extends User {
  access_token?: string;
}

const userState = atom<UserState | null>({
  key: 'userState',
  default: null,
});

export default userState;