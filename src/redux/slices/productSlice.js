import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const newProducts = {
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        available: action.payload.available,
      };
      state.items.push(newProducts);
    },
    deleteProducts: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateProducts: (state, action) => {
      const { id, name, description, price, available } = action.payload;
      const existingProducts = state.items.find((item) => item.id === id);
      if (existingProducts) {
        existingProducts.name = name;
        existingProducts.description = description;
        existingProducts.price = price;
        existingProducts.available = available;
      }
    },
  },
});

export const { addProducts, deleteProducts, updateProducts } = productSlice.actions;
export default productSlice.reducer;
