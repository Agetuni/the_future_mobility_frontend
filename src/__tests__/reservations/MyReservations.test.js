import MyReservations from "../../components/reservations/MyReservations";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    reservation: [
      {
        "id": 39,
        "reserve_date": "2023-01-21T11:00:00.000Z",
        "address": "New York, USA",
        "created_at": "2023-01-18T19:10:54.076Z",
        "updated_at": "2023-01-18T19:10:54.076Z",
        "user_id": 26,
        "vehicle_id": 80,
        "vehicle_name": "Tesla Model S"
      },
      {
        "id": 40,
        "reserve_date": "2023-02-12T09:30:00.000Z",
        "address": "Tokyo, Japan",
        "created_at": "2023-01-18T19:10:54.084Z",
        "updated_at": "2023-01-18T19:10:54.084Z",
        "user_id": 27,
        "vehicle_id": 82,
        "vehicle_name": "Tesla Model X"
      },
      {
        "id": 41,
        "reserve_date": "2023-01-14T10:45:00.000Z",
        "address": "Berlin, Germany",
        "created_at": "2023-01-18T19:10:54.091Z",
        "updated_at": "2023-01-18T19:10:54.091Z",
        "user_id": 26,
        "vehicle_id": 81,
        "vehicle_name": "Tesla Model 3"
      },
      {
        "id": 42,
        "reserve_date": "2023-01-31T12:15:00.000Z",
        "address": "Toronto, Canada",
        "created_at": "2023-01-18T19:10:54.099Z",
        "updated_at": "2023-01-18T19:10:54.099Z",
        "user_id": 26,
        "vehicle_id": 83,
        "vehicle_name": "Tesla Model Y"
      }
    ],
    vehical: [],
    user: {
        id: 1
    }
  };

const store = mockStore(initialState);


describe('MyReservations', () => {
    
    beforeEach(() => {
    // Spy on localStorage
    const localStorageMock = jest.spyOn(Storage.prototype, 'getItem');
    localStorageMock.mockReturnValue(JSON.stringify({ id: 1, token: 'some-token' }));
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
        const reservation = await findByText('Tue Jan 31 2023');
        expect(reservation).toBeInTheDocument();
    });
});