import React from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
// import Header from "./layouts/Header/Header";
import { Route, Switch } from 'react-router-dom';
import SignInPage from 'Pages/SignInPage/SignInPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import MainPage from 'Pages/MainPage/MainPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
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
      </RecoilRoot>
    </div>
  );
}

export default App;
