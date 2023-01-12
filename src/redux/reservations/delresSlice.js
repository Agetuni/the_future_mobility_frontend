import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../api';

const initialState = {
  loading: false,
  myreservation: '',
  error: '',
};

export const delres = createAsyncThunk('reservation/delres', (myreservation) => axios
  .delete(
    `${BASE_URL}api/v1/users/1/reservations/2`,
    {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
      data: myreservation,
    },
  )
  .then((response) => response.data));

const myreservationSlice = createSlice({
  name: 'userDelRes',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(delres.pending, (state) => {
      state.loading = true;
      state.myreservation = {};
      state.error = '';
    });
    builder.addCase(delres.fulfilled, (state, action) => {
      state.loading = false;
      state.myreservation = action.payload;
      state.error = '';
    });
    builder.addCase(delres.rejected, (state, action) => {
      state.loading = false;
      state.myreservation = {};
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default myreservationSlice.reducer;
