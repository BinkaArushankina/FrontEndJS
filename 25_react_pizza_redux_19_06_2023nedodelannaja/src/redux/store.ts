import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';
import searchReducer from './slices/searchSlice';
import itemsReducer from './slices/itemSlice';



export default configureStore({//prinimaem wse componenti sdes
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        search: searchReducer,
        items: itemsReducer
    }
});