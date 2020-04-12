export const addItemToCart = (existingCartItems, newCartItem) => {
  const existingCartItem = existingCartItems.find(
    cartItem => cartItem.id === newCartItem.id
  );

  if (existingCartItem) {
    return existingCartItems.map(cartItem =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...existingCartItems, { ...newCartItem, quantity: 1 }];
};
