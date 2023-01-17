import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../api";


const initialState = {
    loading: false,
    vehical: '',
    error: '',
};

export const delres = createAsyncThunk('vehical/deletevehical', (reservation) =>
  axios.delete(`${BASE_URL}api/v1/users/${JSON.parse(localStorage.getItem('user')).id}/reservations,${vehical.id}`,
    {
        headers: {
            Authorization:`${JSON.parse(localStorage.getItem('user')).token}`,
        },
    }
    ).then((response) => response.data));

const reservationSlice = createSlice({
    name: 'userDelres',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(delres.pending, (state) => {
          state.loading = true;
          state.vehical = {};
          state.error = '';
        });
        builder.addCase(delres.fulfilled, (state, action) => {
          state.loading = false;
          state.vehical = action.payload;
          state.error = '';
        });
        builder.addCase(delres.rejected, (state, action) => {
          state.loading = false;
          state.vehical = {};
          state.error = action.error.message;
        });
      },
      /* eslint-enable */
    });

export default reservationSlice.reducer;