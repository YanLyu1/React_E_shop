export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        // console.log("found: ",existingCartItem);
        return cartItems.map(cartItem => {
            return (cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem)
        })
    } else {
        // console.log("not found: ",existingCartItem);
        return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }
}