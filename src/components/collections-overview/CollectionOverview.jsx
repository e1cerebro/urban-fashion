import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectShopCollections } from '../../store/selectors/shopSelctors';
import './collectionoverview.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

// const mapStateToProps = (state, ownProps) => {
//   return {
//     //collections: [],
//     collections: selectShopCollections(state),
//   };
// };

export default connect(mapStateToProps)(CollectionOverview);
