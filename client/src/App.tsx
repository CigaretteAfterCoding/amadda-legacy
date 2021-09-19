import React, { useEffect, useState } from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
// import Header from "./layouts/Header/Header";
import { Route, Switch } from 'react-router-dom';
import SignInPage from 'Pages/SignInPage/SignInPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import MainPage from 'Pages/MainPage/MainPage';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import userAPI from 'Apis/userAPI';
import userState from 'Recoil/userState';
import { User } from 'Types/user';

function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getInitialUser() {
      const initialUser = await userAPI.getCurrentUser();

      if (initialUser?.id) {
        setUser(initialUser);
      }
    }

    getInitialUser();
  }, []);

  if (!user) {
    return null;
  }

  const initializeUserState = async ({ set }: MutableSnapshot) => {
    if (user?.id) {
      set(userState, user);
    }
  };

  return (
    <div className="App">
      <RecoilRoot initializeState={initializeUserState}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          {/* <Header /> */}
          <Switch>
            <Route
              path="/"
              exact
            >
              <MainPage />
            </Route>
            <Route
              path="/sign-in"
              exact
            >
              <SignInPage />
            </Route>
            <Route
              path="/sign-up"
              exact
            >
              <SignUpPage />
            </Route>
          </Switch>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
