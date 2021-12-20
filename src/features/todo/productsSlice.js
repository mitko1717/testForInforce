import { createSlice } from "@reduxjs/toolkit";
// import { IProduct } from "../../interface/interface";
import { productsAPI } from "../../api/api";

// interface IState {
//   modalWindowToAdd: boolean;
//   modalWindowToShowInfo: boolean;
//   fetchProductsAbility: boolean;
//   products: IProduct[];
//   productToShowInfo: IProduct[];
// }

const initialState = {
  modalWindowToAdd: false,
  modalWindowToShowInfo: false,
  fetchProductsAbility: true,
  products: [],
  productToShowInfo: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.fetchProductsAbility = !state.fetchProductsAbility;
      const productsList = productsAPI.allProducts();
      state.products = state.products.concat(productsList);
      // console.log(state.products);
    },
    addProduct: (state, action /*PayloadAction<IProduct>*/) => {
      const product = {
        id: Date.now(),
        name: action.payload.name,
        count: action.payload.count,
        weight: action.payload.weight,
        size: {
          height: Math.floor(Math.random() * 100 + 100),
          width: Math.floor(Math.random() * 100 + 100),
        },
      };
      state.products.push(product);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    deleteAll: (state) => {
      state.products = [];
    },
    toggleModalWindowToAddNewItem: (state) => {
      state.modalWindowToAdd = !state.modalWindowToAdd;
    },
    toggleModalWindowToShowInfo: (state, action) => {
      state.modalWindowToShowInfo = !state.modalWindowToShowInfo;
      state.productToShowInfo = action.payload;
      console.log(action.payload);
      console.log(state.productToShowInfo);
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  fetchProducts,
  toggleModalWindowToAddNewItem,
  deleteAll,
  toggleModalWindowToShowInfo,
} = productsSlice.actions;

export default productsSlice.reducer;
