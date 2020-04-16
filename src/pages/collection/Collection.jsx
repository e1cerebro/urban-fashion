import React from 'react';
import './collection.scss';
import { selectShopCollection } from '../../store/selectors/shopSelctors';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';

const Collection = ({ collection }) => {
  if (collection) {
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items &&
            items.map(item => <CollectionItem key={item.id} item={item} />)}
        </div>
      </div>
    );
  }

  return <div>404</div>;
};

const mapStateToProps = (state, props) => ({
  collection: selectShopCollection(state, props),
});

export default connect(mapStateToProps, null)(Collection);
