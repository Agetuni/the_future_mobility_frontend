import React from 'react';
import { useSelector } from 'react-redux';
import Main from './components/Main/Main';
import Signin from './components/user/SignIn';
import Signup from './components/user/SignUp';
import VehicalList from './components/vehicals/Vehicals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VehicalDetails from './components/vehicals/vehicaldetails';
import MyReservations from './components/reservations/MyReservations';
import SideMenu from './components/layouts/sidemenu';
import AddVehicle from './components/vehicals/addVehicle';
import AddReservation from './components/reservations/reservation';
import DeleteVehicle from './components/vehicals/deleteVehicle';
const App = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className='APP'>
      {user ? (
        <SideMenu>
          <Routes>
            <Route path='/' element={<VehicalList />} />
            <Route path='/AddVehicle' element={<AddVehicle />} />
            <Route path="/vehicals/:id" element={<VehicalDetails />} />
            <Route path="/myReservations" element={<MyReservations />} />
            <Route path='/reserve' element={<AddReservation/>} />
            <Route path='/deleteVehicle' element={<DeleteVehicle/>} />
          </Routes>
        </SideMenu>
      ) :
        (
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Signin />} />
          </Routes>
        )}
    </div>

  );
};


export default App;