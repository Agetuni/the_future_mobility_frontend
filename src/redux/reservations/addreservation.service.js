import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../api';

const params = useParams();
const addreservation = createAsyncThunk(
  
  'reservation/addreservation',
  (reservation) => {
    axios.post(`${BASE_URL}api/v1/${params.id}/reservation`, reservation, {
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
