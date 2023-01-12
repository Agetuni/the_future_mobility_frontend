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
        
    },
middleware: (getDefaultMiddleware) => getDefaultMiddleware(findNonSerializableValue).concat(logger), // eslint-disable-line

});

export default store;
