import React from 'react';
import Navbar from './components/layouts/Navbar';
import Main from './components/Main/Main';
import { BrowserRouter  , Route, Routes} from 'react-router-dom'


function App() {
  
  return (
    <div>
      <Navbar />
      <Main />

    </div>

  );
}

export default App;
