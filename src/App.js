import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './store/actions/userAction';
import './App.scss';
const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const userRef = await createUserProfileDocument(userAuth);

      if (userAuth) {
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(null);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentUser: currentuser => {
      dispatch(setCurrentUser(currentuser));
    },
  };
};

export default connect(null, { setCurrentUser })(App);
