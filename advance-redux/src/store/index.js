import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export const uiAction = uiSlice.actions;
export const cartAction = cartSlice.actions;

export default store;
