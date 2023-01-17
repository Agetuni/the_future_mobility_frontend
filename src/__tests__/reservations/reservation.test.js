import { BrowserRouter } from "react-router-dom";
import AddReservation from "../../components/reservations/reservation";
import renderer from 'react-test-renderer';

test('Reservation form match snapshot', () => {
    const component = renderer.create(
        <BrowserRouter>
            <AddReservation />
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});