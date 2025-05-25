import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct,allProduct } from "../../services/productApi";

export const fetchQueryProduct = createAsyncThunk("product/query/fetch", async (categoryId) => {
  const data = await getProduct(categoryId); 
  return data.data
});
export const fetchAllProduct = createAsyncThunk("products/fetch", async () => {
  const data = await allProduct(); 
  return data.data
});

const initialState = {
  queryProduct: [],
  allProducts:[]
};


const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchQueryProduct.fulfilled,(state,action)=>{
            state.queryProduct = action.payload
        })
          builder.addCase(fetchAllProduct.fulfilled,(state,action)=>{
            state.allProducts = action.payload
        })
    }
})

export default productSlice.reducer;