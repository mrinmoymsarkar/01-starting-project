import {configureStore } from '@reduxjs/toolkit';
import {counterSlice} from "./counter";
import {authenticatedSlice} from "./auth";

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authenticatedSlice.reducer}
});





export default store;
