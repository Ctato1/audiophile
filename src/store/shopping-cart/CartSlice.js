import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity += newItem.quantity;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          category: newItem.category,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    deleteAll(state) {
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
