import { configureStore } from '@reduxjs/toolkit';
import delresSlice from './reservations/delreservation';
import vehicalSlice from './vehical/vehicalSlice';
import delresReducer from './reservations/delreservation';
import reservationSlice from './reservations/reservationSlice';
import newvehical from './vehical/newVehical';
import delvehicalSlice from './vehical/delvehicalSlice';

const store = configureStore({
    reducer: {
        addvehical:newvehical,
        vehical: vehicalSlice,
        delvehical: delvehicalSlice,
        delereser: delresSlice,
        reservation: reservationSlice,
        myreservation: delresReducer,
        
        
    },
middleware: (getDefaultMiddleware) => getDefaultMiddleware(findNonSerializableValue).concat(logger), // eslint-disable-line

});

export default store;
