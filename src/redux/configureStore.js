import { configureStore } from '@reduxjs/toolkit';
import vehicalSlice from './vehical/vehicalSlice';

const store = configureStore({
    reducer: {
        vehical: vehicalSlice
    }
});

export default store;
