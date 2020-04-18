import { SHOP_ACTIONS } from '../types';
import {
  convertCollectionSnapshotToMap,
  firestore,
} from '../../firebase/firebase.util';

export const fetchCollectionsStart = () => {
  return async dispatch => {
    try {
      const collectionRef = firestore.collection('collections');
      dispatch({ type: SHOP_ACTIONS.FETCH_COLLECTIONS_START });
      collectionRef.onSnapshot(async snapshot => {
        const mappedCollections = await convertCollectionSnapshotToMap(
          snapshot
        );

        dispatch({
          type: SHOP_ACTIONS.FETCH_COLLECTIONS_SUCCESSFUL,
          collections: mappedCollections,
        });
      });
    } catch (error) {
      dispatch({ type: SHOP_ACTIONS.FETCH_COLLECTIONS_FAILURE, error });
    }
  };
};
