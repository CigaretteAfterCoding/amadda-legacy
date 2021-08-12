import React from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
// import Header from "./layouts/Header/Header";
import { Route, Switch } from 'react-router-dom';
import SignInPage from 'Pages/SignInPage/SignInPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import MainPage from 'Pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/sign-in" exact>
          <SignInPage />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
