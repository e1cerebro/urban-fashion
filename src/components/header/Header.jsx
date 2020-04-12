import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../store/selectors/cart.selectors';
import { selectCurrentUser } from '../../store/selectors/user.selectors';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>

        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>

      {hidden ? '' : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(Header);
