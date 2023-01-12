import { configureStore } from '@reduxjs/toolkit';
import delresSlice, { delres } from './reservations/delresSlice';
import vehicalSlice from './vehical/vehicalSlice';
import reservationSlice from './reservations/reservationSlice';
import newvehical from './vehical/newVehical';
import delvehicalSlice from './vehical/delvehicalSlice';

const store = configureStore({
    reducer: {
        addvehical:newvehical,
        vehical: vehicalSlice,
        delvehical:delvehicalSlice,
        reservation: reservationSlice,
        delreservation: delresSlice,
    }
});

export default store;
