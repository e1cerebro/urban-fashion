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

export const removeCartItem = (existingCartItems, newCartItem) => {
  return existingCartItems.filter(cartItem => cartItem.id !== newCartItem.id);
};

export const decreaseCartItem = (existingCartItems, removeCartItem) => {
  const existingCartItem = existingCartItems.find(
    cartItem => cartItem.id === removeCartItem.id
  );

  if (existingCartItem) {
    if (removeCartItem.quantity === 1) {
      return existingCartItems.filter(
        cartItem => cartItem.id !== removeCartItem.id
      );
    }

    return existingCartItems.map(cartItem =>
      cartItem.id === removeCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return [...existingCartItems];
};
