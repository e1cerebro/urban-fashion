import { createSelector } from 'reselect';

const selectCategory = state => state.category;

export const selectProductCategories = createSelector(
  [selectCategory],
  category => category.categories
);
