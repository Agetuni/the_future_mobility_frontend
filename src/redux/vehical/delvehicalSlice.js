import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../api";

const token = JSON.parse(localStorage.getItem('user')).token

const initialState = {
    loading: false,
    vehical: '',
    error: '',
};

export const deletevehical = createAsyncThunk('vehical/deletevehical', (vehical) =>
  axios.delete(`${BASE_URL}api/v1/vehicles/${vehical.id}`,
    {
        headers: {
            Authorization: token,
        },
    }
    ).then((response) => response.data));

const vehicalSlice = createSlice({
    name: 'userDelVehical',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(deletevehical.pending, (state) => {
          state.loading = true;
          state.vehical = {};
          state.error = '';
        });
        builder.addCase(deletevehical.fulfilled, (state, action) => {
          state.loading = false;
          state.vehical = action.payload;
          state.error = '';
        });
        builder.addCase(deletevehical.rejected, (state, action) => {
          state.loading = false;
          state.vehical = {};
          state.error = action.error.message;
        });
      },
      /* eslint-enable */
    });

export default vehicalSlice.reducer;