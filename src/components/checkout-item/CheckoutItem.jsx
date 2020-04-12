import React from 'react';
import './CheckoutItem.scss';
import { connect } from 'react-redux';
import {
  removeCartItem,
  decreaseCartItem,
  addItem,
} from '../../store/actions/cartActions';

const CheckoutItem = ({ item, removeCartItem, decreaseCartItem, addItem }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={item.imageUrl} alt='item' />
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseCartItem(item)}>
          {' '}
          &#45;
        </div>
        <span className='value'>{item.quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#43;
        </div>
      </span>
      <span className='price'>{item.price}</span>
      <div className='remove-button' onClick={() => removeCartItem(item)}>
        &times;
      </div>
    </div>
  );
};

export default connect(null, { removeCartItem, decreaseCartItem, addItem })(
  CheckoutItem
);
