import React from 'react';
import Navbar from './components/layouts/Navbar';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import { BrowserRouter  , Route, Routes} from 'react-router-dom'

const App = () => (
  <>
    <Routes>
      

      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />}>
        
      </Route>
      
    </Routes>
  </>
);


export default App;
