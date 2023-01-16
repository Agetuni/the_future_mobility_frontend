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
 `${BASE_URL}api/v1/users/${userid}/reservations/${myreservation.id}`,

    {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('user')).token}`,
      },
      
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
