import React, { Component } from 'react';
import { SHOP_DATA } from './shop-data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../store/selectors/shopSelctors';

const Shop = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    collections: selectShopCollections(state),
  };
};
export default connect(mapStateToProps)(Shop);
