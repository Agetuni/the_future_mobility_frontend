import { createSlice } from '@reduxjs/toolkit';
import reservation from './reservation.service';
import myReservations from './myreservations.service';

const reservationSlice = createSlice({
  name: 'motor',
  initialState: {
    reservation: [],
    status: null,
  },
  extraReducers: {
    [reservation.fulfilled]: (state, action) => {
      state.reservation = [...state.reservation, action.payload];
      state.status = 'success';
    },
    [reservation.pending]: (state) => {
      state.status = 'loading';
    },
    [reservation.rejected]: (state) => {
      state.reservation = [];
      state.status = 'failed';
    },
    [myReservations.fulfilled]: (state, action) => {
      state.reservation = action.payload;
      state.status = 'success';
    },
    [myReservations.pending]: (state) => {
      state.status = 'loading';
    },
    [myReservations.rejected]: (state) => {
      state.reservation = [];
      state.status = 'failed';
    },
  },
});

export default reservationSlice.reducer;
