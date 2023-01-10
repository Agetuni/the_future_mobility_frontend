import { Outlet, NavLink } from 'react-router-dom';
import './register.scss';

const Registration = () => (
  <main className="registration-page-container">
   
    <section className="registration-page">
      <section className="registration-page-content">
        <nav className="registration-page-nav">
          <ul className="registration-page-nav-list">
            <li>
              <NavLink to="login" className="registration-page-nav-list-item">
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink to="signup" className="registration-page-nav-list-item">
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="registration-page-outlet">
          <Outlet />
        </section>
      </section>
    </section>
  </main>
);

export default Registration;
