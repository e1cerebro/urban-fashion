import React from 'react';
import './CartDropdown.scss';
import Button from '../button/Button';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
