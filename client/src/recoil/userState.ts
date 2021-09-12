import { atom } from 'recoil';

interface User {
  id: number;
  nickname: string;
  email: string;
}

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export default userState;