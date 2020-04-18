import React from 'react';
import { compose } from 'redux';
import WithSpinner from '../with-spinner/WithSpinner';
import CollectionOverview from '../collections-overview/CollectionOverview';
import { isFetchingCollection } from '../../store/selectors/shopSelctors';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoading: isFetchingCollection(state),
  };
};

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
