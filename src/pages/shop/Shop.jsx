import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import Collection from '../../pages/collection/Collection';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.util';
import { updateCollections } from '../../store/actions/shopActions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const mappedCollections = await convertCollectionSnapshotToMap(snapshot);
      updateCollections(mappedCollections);
      setLoading(false);
    });
    return () => {};
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />

      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default connect(null, { updateCollections })(Shop);
