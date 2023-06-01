
import {configureStore} from '@reduxjs/toolkit';
import MyProductReducr from '../newredux/MyProductSlice';
import MyCartReducer from '../newredux/MyCartSlice';
export const MyStore=configureStore({
    reducer:{
        product:MyProductReducr,
        cart:MyCartReducer,
    },

});