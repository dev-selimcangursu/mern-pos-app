import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCategory } from "../../services/categoriesApi";

// Tüm Kategori State
export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
  const data = await fetchAllCategory(); 
  return data.data
});

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
