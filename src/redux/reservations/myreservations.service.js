import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../api';

const userid = localStorage.getItem('id');
const myReservations = createAsyncThunk(
  'myreservations/myreservations',
  async () => {
    const response = await axios.get(`${BASE_URL}api/v1/users/${userid}reservation`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default myReservations;
