import { createSelector } from 'reselect';

const selectShop = state => state.shop.collections;
const collectionslug = (state, props) => props.match.params.collectionId;

export const selectShopCollections = createSelector([selectShop], collections =>
  collections ? Object.values(collections) : []
);

export const selectShopCollection = createSelector(
  [selectShop, collectionslug],
  (collections, slug) => (collections ? collections[slug] : null)
);
