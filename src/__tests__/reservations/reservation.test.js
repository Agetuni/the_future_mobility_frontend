import { BrowserRouter } from "react-router-dom";
import AddReservation from "../../components/reservations/reservation";
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    reservation: [],
    vehical: [],
    user: {
        id: 1
    }
  };

const store = mockStore(initialState);

test('Reservation form match snapshot', () => {
    const component = renderer.create(
        <BrowserRouter>
        <Provider store={store}>
            <AddReservation />
                </Provider>
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});