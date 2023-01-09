import { createSlice } from "@reduxjs/toolkit";
import vehicalDetail from './details.service';

const vehicalSlice = createSlice({
    name: 'vehical',
    initialState: {
        vehical: {},
        status: null,
    },
    extraReducers: {
        [vehicalDetail.fullfilled]: (state, { payload }) => {
            state.vehical = payload;
            state.status = 'success';
        },
        [vehicalDetail.pending]: (state, { payload }) => {
            state.vehical = payload;
            state.status = 'loading';
        },
        [vehicalDetail.rejected]: (state, { payload }) => {
            state.vehical = payload;
            state.status = 'failed';
        }
    }
});

export default vehicalSlice;