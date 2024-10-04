import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../redux_store.js";

export function readCartFromLocalStorage() {
  let cart = [];
  try {
    cart = localStorage.getItem("itemsInCart");
    cart = JSON.parse(cart);
  } catch (e) {
    console.error(e);
  }
  console.log(cart);
  return {
    type: "READ_CART_FROM_LOCAL_STORAGE",
    payload: cart || [],
  };
}

export function addToCart(product) {
  const newCart = [...store.getState().cart.items, product];
  console.log(newCart);
  localStorage.setItem("itemsInCart", JSON.stringify(newCart));
  return {
    type: "CART_ADD",
    payload: {
      product,
    },
  };
}

export function removeFromCart(productId) {
  const newCart = store
    .getState()
    .cart.items.filter((item) => item.id !== productId);
  localStorage.setItem("itemsInCart", JSON.stringify(newCart));
  return {
    type: "CART_REMOVE",
    payload: {
      productId,
    },
  };
}

export function loadProducts(products) {
  return { type: "LOAD_PRODUCTS", products };
}

export const submitCart = createAsyncThunk("CHECKOUT", async (data) => {
  const res = await axios.post("http://localhost:8080/checkout", data);
  return res.data;
});
