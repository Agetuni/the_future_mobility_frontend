import { configureStore } from '@reduxjs/toolkit';
import { delres } from './reservations/delresSlice';
import vehicalSlice from './vehical/vehicalSlice';
import reservationSlice from './reservations/reservationSlice';

const store = configureStore({
    reducer: {
        vehical: vehicalSlice,
        reservation: reservationSlice,
        myreservation: delres
    }
});

export default store;
