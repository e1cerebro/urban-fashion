import React from 'react';
import './CartDropdown.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../store/actions/cartActions';
import { connect } from 'react-redux';
import { selectCartItems } from '../../store/reducers/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, toggleCartHidden, location }) => {
  const handleGoToCheckout = () => {
    toggleCartHidden();
    history.push('/checkout');
  };

  console.log(location);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Cart is empty</span>
        )}
      </div>

      {cartItems.length && location.pathname !== '/checkout' ? (
        <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
