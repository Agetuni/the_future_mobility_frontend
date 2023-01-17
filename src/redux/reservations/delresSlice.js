import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../api";


const initialState = {
    loading: false,
    reservation: '',
    error: '',
};

export const delres = createAsyncThunk('reservation/deletereservation', (reservation) =>
  axios.delete(`${BASE_URL}api/v1/users/${JSON.parse(localStorage.getItem('user')).id}/reservations,${reservation.id}`,
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
        builder.addCase(deletereservation.pending, (state) => {
          state.loading = true;
          state.reservation = {};
          state.error = '';
        });
        builder.addCase(deletereservation.fulfilled, (state, action) => {
          state.loading = false;
          state.reservation = action.payload;
          state.error = '';
        });
        builder.addCase(deletereservation.rejected, (state, action) => {
          state.loading = false;
          state.reservation = {};
          state.error = action.error.message;
        });
      },
      /* eslint-enable */
    });

export default reservationSlice.reducer;