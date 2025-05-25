import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductToBasket } from "../../services/productApi";

export const fetchProductToBasket = createAsyncThunk(
  "/get/basket/product",
  async (id) => {
    const data = await getProductToBasket(id);
    return data.data;
  }
);

const initialState = {
  basket: [],
};

export const categorySlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductToBasket.fulfilled, (state, action) => {
      state.basket = action.payload;
    });
  },
});

export default categorySlice.reducer;
