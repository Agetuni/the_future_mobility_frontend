import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Main from '../../components/Main/Main';
import { render, screen } from '@testing-library/react';


test('Main component match snapshot, landing page', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Has a button that takes you to registration page', () => {
    render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
    expect(screen.getByText(/Register/i).href).toMatch(/signup/i);
});
