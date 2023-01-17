import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../api';

const initialState = {
  loading: false,
  vehical: '',
  error: '',
};

export const updatevehical = createAsyncThunk(
    
  'vehical/updatevehical',
    async (resource) => {
        console.log(resource)
    const response = await axios.patch(`${BASE_URL}api/v1/vehicles/${resource.id}`, resource, {
        headers: {
          Authorization: `${JSON.parse(localStorage.getItem('user')).token}`,
        },
      },
    );
    return response.data;
  },
);

const vehicalSlice = createSlice({
  name: 'userUpdatevehical',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(updatevehical.pending, (state) => {
      state.loading = true;
      state.vehical = {};
      state.error = '';
    });
    builder.addCase(updatevehical.fulfilled, (state, action) => {
      state.loading = false;
      state.vehical = action.payload;
      state.error = '';
    });
    builder.addCase(updatevehical.rejected, (state, action) => {
      state.loading = false;
      state.vehical = {};
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default vehicalSlice.reducer;
