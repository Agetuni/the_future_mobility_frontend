import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../api';





const myReservations = createAsyncThunk(
  'myreservations/myreservations',
  async (user) => {
    const response = await axios.get(`${BASE_URL}api/v1/users/${JSON.parse(localStorage.getItem('user')).id}/reservations`,
    {

      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('user')).token}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default myReservations;
