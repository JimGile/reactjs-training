export function cart(state = { items: [] }, action = {}) {
  switch (action.type) {
    case "READ_CART_FROM_LOCAL_STORAGE":
      return {
        ...state,
        items: action.payload || [],
      };

    case "CART_ADD":
      return {
        ...state,
        items: [...state.items, action.payload.product],
      };

    case "CART_REMOVE":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload.productId
        ),
      };

    case "CHECKOUT/fulfilled":
      localStorage.setItem("itemsInCart", JSON.stringify({}));
      return {
        ...state,
        items: [],
      };

    default:
      return state; //no relevant action type
  }
}

export function products(state = { products: [] }, action = {}) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state; //no relevant action type
  }
}
