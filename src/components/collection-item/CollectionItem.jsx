import React from 'react';
import '../collection-item/collectionItem.scss';
import Button from '../button/Button';
import { addItem } from '../../store/actions/cartActions';
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  const handleAddItem = () => {
    addItem(item);
  };

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={handleAddItem} inverted>
        ADD TO CART
      </Button>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
