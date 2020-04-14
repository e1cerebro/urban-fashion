import { createSelector } from 'reselect';

const selectShop = state => state.shop;
const collectionslug = (state, props) => props.match.params.collectionId;

export const selectShopCollections = createSelector([selectShop], shop =>
  Object.values(shop)
);

export const selectShopCollection = createSelector(
  [selectShop, collectionslug],
  (shop, slug) => shop[slug]
);
