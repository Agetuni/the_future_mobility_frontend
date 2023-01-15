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
            <Route path='/reservations' element={<MyReservations />} />
          </Routes>
        </SideMenu>
      ) :
        (
          <Routes>
            <Route path='/reservations' element={<MyReservations />} />
            <Route path='/' element={<Main />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/' element={<Main />} />
          </Routes>
        )}
    </div>

  );
};


export default App;