import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './page/Home';
import LoginPage from './page/Login';
import SignupPage from './page/Signup';
import MentorDetail from './page/MentorDetail';
import MenteeDetail from './page/MenteeDetail';

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route path='/mentor_detail/1' component={MentorDetail} />
        <Route path='/mentee_detail/1' component={MenteeDetail} />
      </Switch>

    </>
  );
};

export default App;
