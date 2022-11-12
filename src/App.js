import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hello from './component/Hello'
import React from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route permet de définir une addresse url et de ne charger ce component que si l'addresse correspond */}
          <Route path='/hello' element={<Hello/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
