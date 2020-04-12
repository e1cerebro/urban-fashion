import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import CheckoutPage from './pages/checkout/CheckoutPage';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './store/actions/userAction';
import './App.scss';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './store/reducers/user.selectors';

const App = ({ setCurrentUser, currentUser }) => {
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
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
