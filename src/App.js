import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import Header from './components/header/Header';
import { auth } from './firebase/firebase.util';
import './App.scss';

const App = () => {
  const [currentuser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentuser={currentuser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
