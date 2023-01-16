import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../api';


const userid = JSON.parse(localStorage.getItem('user')).id
const token = JSON.parse(localStorage.getItem('user')).token
const name = JSON.parse(localStorage.getItem('user')).name

const myReservations = createAsyncThunk(
  'myreservations/myreservations',
  async (user) => {
    const response = await axios.get(`${BASE_URL}api/v1/users/${userid}/reservations`,
    {
      headers: {
        Authorization: token,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default myReservations;
