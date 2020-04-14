import { DIRECTORY_ACTIONS } from '../types';

const INITIAL_STATE = {
  categories: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      url: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      url: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      url: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      url: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      url: 'shop/mens',
    },
  ],
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DIRECTORY_ACTIONS.FETCH_CATEGORIES:
      return { ...state };
    default:
      return state;
  }
};
