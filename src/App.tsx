import React from 'react';
import './index.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from '@pages/home';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default App;
