import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
// import Header from "./layouts/Header/Header";
import { Route, Switch } from 'react-router-dom';
import SignInPage from './pages/Login/SignInPage';
import SignUpPage from './pages/SignUp/SignUpPage';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact>
          {/* <MainPage/> */}
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
