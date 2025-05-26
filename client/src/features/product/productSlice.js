import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProduct,
  allProduct,
  searchProduct,
} from "../../services/productApi";

export const fetchQueryProduct = createAsyncThunk(
  "product/query/fetch",
  async (categoryId) => {
    const data = await getProduct(categoryId);
    return data.data;
  }
);

export const fetchAllProduct = createAsyncThunk("products/fetch", async () => {
  const data = await allProduct();
  return data.data;
});

export const fetchSearchProduct = createAsyncThunk(
  "products/search/fetch",
  async (productName) => {
    const data = await searchProduct(productName);
    return data.data;
  }
);

const initialState = {
  queryProduct: [],
  allProducts: [],
  searchProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSearchProduct(state) {
      state.searchProduct = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueryProduct.fulfilled, (state, action) => {
        state.queryProduct = action.payload;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.allProducts = action.payload;
      })
      .addCase(fetchSearchProduct.fulfilled, (state, action) => {
        state.searchProduct = action.payload;
      });
  },
});

export const { clearSearchProduct } = productSlice.actions;
export default productSlice.reducer;
