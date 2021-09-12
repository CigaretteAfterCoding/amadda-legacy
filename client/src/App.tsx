import React, { useEffect } from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
// import Header from "./layouts/Header/Header";
import { Route, Switch } from 'react-router-dom';
import SignInPage from 'Pages/SignInPage/SignInPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import MainPage from 'Pages/MainPage/MainPage';
import diaryAPI from 'Apis/diaryAPI';

function App() {
  useEffect(() => {
    diaryAPI.addDiary({
      title: 'asdsf',
      content: 'dasdffdf',
      date: '2021-01-01',
      weather: 'sunny',
      is_private: false,
    });
  });
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
