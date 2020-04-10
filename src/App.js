import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import './App.scss';

const Test = props => {
  return (
    <div>
      Test <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={Test} />
      </Switch>
    </div>
  );
};

export default App;
