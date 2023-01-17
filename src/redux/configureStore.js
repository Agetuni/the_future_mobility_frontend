import { configureStore } from '@reduxjs/toolkit';
import delresSlice from './reservations/delresSlice';
import vehicalSlice from './vehical/vehicalSlice';
import myreservationSlice from './reservations/reservationSlice';
import newvehical from './vehical/newVehical';
import delvehicalSlice from './vehical/delvehicalSlice';

const store = configureStore({
    reducer: {
        addvehical:newvehical,
        vehical: vehicalSlice,
        delvehical: delvehicalSlice,
        delereser: delresSlice,
        
        
    },
middleware: (getDefaultMiddleware) => getDefaultMiddleware(findNonSerializableValue).concat(logger), // eslint-disable-line

});

export default store;
