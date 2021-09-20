import userAPI from 'Apis/userAPI';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import userState from './userState';

function InitializeRecoilState({ children }: JSX.ElementChildrenAttribute) {
  const [_, setUser] = useRecoilState(userState);

  useEffect(() => {
    async function getInitialUser() {
      const initialUser = await userAPI.getCurrentUser();

      if (initialUser?.id) {
        setUser(initialUser);
      }
    }

    getInitialUser();
  }, [setUser]);

  return (
    <>
      {children}
    </>
  );
}

export default InitializeRecoilState;
