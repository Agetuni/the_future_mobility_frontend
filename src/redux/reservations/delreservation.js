import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../api";
import { useNavigate } from "react-router-dom";

const initialState = {
    loading: false,
    vehical: '',
    error: '',
};

export const delereser = createAsyncThunk(
  
  'reservation/addreservation',
  (reservation) => {
    console.log(reservation)
    axios.delete(`${BASE_URL}api/v1/users/${JSON.parse(localStorage.getItem('user')).id}/reservations/${reservation.id}`,  {

      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('user')).token}`,
      },
    })
      .then((response) => {

        useNavigate('/myReservations');

        const { data } = response;
        return data;
      });
  },
);
export default delereser;