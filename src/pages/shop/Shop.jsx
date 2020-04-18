import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverviewContainer from '../../components/collections-overview/CollectionOverviewContainer';
import CollectionPageContainer from '../../pages/collection/CollectionContainer';
import { fetchCollectionsStart } from '../../store/actions/shopActions';
import { connect } from 'react-redux';

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />

      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default connect(null, { fetchCollectionsStart })(Shop);
