import { createSelector } from 'reselect';

const selectCollections = state => state.shop.collections;
const selectShop = state => state.shop;
const collectionslug = (state, props) => props.match.params.collectionId;

export const selectShopCollections = createSelector(
  [selectCollections],
  collections => (collections ? Object.values(collections) : [])
);

export const selectShopCollection = createSelector(
  [selectCollections, collectionslug],
  (collections, slug) => (collections ? collections[slug] : null)
);

export const isFetchingCollection = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const isCollectionLoaded = createSelector(
  [selectCollections],
  collections => !!collections
);
