import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../api';

const addreservation = createAsyncThunk(
  'reservation/addreservation',
  (reservation) => {
    axios.post(`${BASE_URL}api/v1/reservation`, reservation, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        useNavigate('/my_reservations');
        const { data } = response;
        return data;
      });
  },
);

export default addreservation;
