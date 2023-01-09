import React from 'react';
import Navbar from './components/layouts/Navbar';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import { BrowserRouter  , Route, Routes} from 'react-router-dom'
import Vehicals from './components/vehicals/Vehicals';
import Vehical from './components/vehical/Vehical';
const App = () => (
  <>
    <div>
    
    </div>
    <Routes>
      

      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/vehicals" element={<Vehicals />}/>
      <Route path="/vehical" element={<Vehical />}/> 
         
     
      
    </Routes>
  </>
);


export default App;
