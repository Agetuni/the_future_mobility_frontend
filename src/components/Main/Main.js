import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/main.scss';

const Main = () => {
  

  return (
      <>
          
      <main className="splashscreen-container">
        <section className="splashscreen-content">
                  <h2 className="splashscreen-message">Welcome To Moblity Future</h2>  
                  <p  className="button splashscreen-button">
            Register
          </p>        
              </section>
             
      </main>
    </>
  );
};

export default Main;