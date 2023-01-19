import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/main.scss';

const Main = () => {
  useEffect(() => {
    if (localStorage.getItem('loggedOut')) {
      localStorage.removeItem('loggedOut');
    }
  }, []);

  return (
      <>
          
      <main className="splashscreen-container">
        <section className="splashscreen-content">
                  <h2 className="splashscreen-message">Welcome To Moblity Future</h2>  
                  <NavLink to="/signup" className="button splashscreen-button">
            Register
          </NavLink>       
              </section>
             
      </main>
    </>
  );
};

export default Main;