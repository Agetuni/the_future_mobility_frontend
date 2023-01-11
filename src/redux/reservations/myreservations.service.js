import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const myReservations = createAsyncThunk(
  'myreservations/myreservations',
  async (user) => {
    const response = await axios.get(`${BASE_URL}api/v1/reservations`, user, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default myReservations;
