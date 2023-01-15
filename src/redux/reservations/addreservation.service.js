import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../api';

const userid = localStorage.getItem('id');
const addreservation = createAsyncThunk(
  
  'reservation/addreservation',
  (reservation) => {
    axios.post(`${BASE_URL}api/v1/users/${userid}reservation`, reservation, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        useNavigate('/reservations');
        const { data } = response;
        return data;
      });
  },
);

export default addreservation;
