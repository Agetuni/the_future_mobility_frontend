import React from 'react';
import Navbar from './components/layouts/Navbar';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import { BrowserRouter  , Route, Routes} from 'react-router-dom'
import Vehicals from './components/vehicals/Vehicals';
import Vehical from './components/vehical/Vehical';
import Signup from './components/user/SignUp';
import Signin from './components/user/SignIn';
const App = () => (
  <>
    <Routes>
      

      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/vehicals" element={<Vehicals />}/>
      <Route path="/vehical" element={<Vehical />}/> 
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
     
      
    </Routes>
  </>
);


export default App;