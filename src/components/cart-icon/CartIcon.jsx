import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../store/actions/cartActions';
import { selectCartItemsCount } from '../../store/reducers/cart.selectors';

const CartIcon = ({ toggleCartHidden, cartItemsLength }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsLength}</span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartItemsLength: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
