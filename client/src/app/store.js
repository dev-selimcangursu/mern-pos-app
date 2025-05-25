import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import productReducer from "../features/product/productSlice";
import basketReducer from "../features/basket/basketSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    product:productReducer,
    basket:basketReducer
  },
});
