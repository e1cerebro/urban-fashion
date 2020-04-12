import React from 'react';
import './CartDropdown.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ cart: { cartItems } }, ownProps) => {
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(CartDropdown);
