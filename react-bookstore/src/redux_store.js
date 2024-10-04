import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cart, products } from "./reducers";

const rootReducer = combineReducers({
  cart: cart,
  products: products,
});

export const store = configureStore({ reducer: rootReducer });
