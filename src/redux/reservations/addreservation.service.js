import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../api';


const userid = JSON.parse(localStorage.getItem('user')).id
const token = JSON.parse(localStorage.getItem('user')).token
const name = JSON.parse(localStorage.getItem('user')).className

const addreservation = createAsyncThunk(
  
  'reservation/addreservation',
  (reservation) => {

    axios.post(`${BASE_URL}api/v1/${userid}/reservation`, reservation, {

      headers: {
        Authorization: token,
      },
    })
      .then((response) => {

        useNavigate('/myReservations');

        const { data } = response;
        return data;
      });
  },
);

export default addreservation;
