import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/selectors/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import Button from '../../components/button/Button';

import StripeCheckoutButton from '../../components/stripe-button/StripeCheckoutButton';
const CheckoutPage = ({ cartItems, cartTotal }) => {
  if (cartItems.length) {
    return (
      <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>

        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
        <div className='total'>
          <span>TOTAL: ${cartTotal}</span>
          <div className='pay-now'>
            <StripeCheckoutButton price={cartTotal} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='checkout-page'>
      <span>Cart is empty</span>
      {''}
      <Button>GO TO SHOP</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
