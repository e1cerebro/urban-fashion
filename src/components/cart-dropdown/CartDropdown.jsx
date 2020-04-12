import React from 'react';
import './CartDropdown.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../store/reducers/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems &&
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps, null)(CartDropdown);
