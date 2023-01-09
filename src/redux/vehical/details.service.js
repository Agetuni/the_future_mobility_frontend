import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../api';

const vehicalDetail = createAsyncThunk(
    'vehical/vehical',
    async (id) => {
        const response = await axios.get(`${BASE_URL}api/v1/vehicals/${id}`, {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        });
        const res = await response.data;
        return res;
      },
    );
    
    export default vehicalDetail;
