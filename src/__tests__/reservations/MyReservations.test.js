import MyReservations from "../../components/reservations/MyReservations";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../../redux/user_reducer';
import { vehicalReducer } from '../../redux/vehical_reducer';
import { reserveReducer } from '../../redux/resevation_reducer';

const rootReducer = combineReducers({
  // Reducers
  reservation: reserveReducer,
  vehical: vehicalReducer,
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


describe('MyReservations', () => {
    
    beforeEach(() => {
    // Spy on localStorage
    const localStorageMock = jest.spyOn(Storage.prototype, 'getItem');
    localStorageMock.mockReturnValue(JSON.stringify({ id: 1, token: 'some-token' }));

    // Spy on JSON
    const jsonMock = jest.spyOn(JSON, 'parse');
    jsonMock.mockReturnValue({ id: 1, token: 'some-token' });

    // Mock axios
    const mockResponse = { data: [{ id: 1, date: '2022-01-01', address: 'some-address', user_id: 1, vehicle_id: 1 }] };
    jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

    it('Display a list of reservations', async () =>{
        const { findByText  } = render(
            <BrowserRouter>
                <Provider store={store}>
                  <MyReservations />
                </Provider>
            </BrowserRouter>
        );
        const reservation = await findByText('2022-01-01');
        expect(reservation).toBeInTheDocument();
    });
});