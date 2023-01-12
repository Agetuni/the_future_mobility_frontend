import React from 'react';
import Navbar from './components/layouts/Navbar';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import { BrowserRouter  , Route, Routes} from 'react-router-dom'
import Vehicals from './components/vehicals/Vehicals';
import VehicalDetails from './components/vehicals/vehicaldetails'
import VehicalList from './components/vehicals/Vehicals';
import MyReservations from './components/reservations/MyReservations'
const App = () => (
  <>
    <div>
    
    </div>
    <Routes>
      

      
      <Route path="/vehicals/:id" element={<VehicalDetails />}/>
      <Route path="/vehical/:id/reservation" element={<MyReservations />} /> 
      <Route path="/vehicals" element={<VehicalList />}/>
         
     
      
    </Routes>
  </>
);


export default App;
