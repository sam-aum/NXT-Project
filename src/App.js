import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import staticData from './data'
import {Route, Routes, useNavigate} from 'react-router-dom'

import Navigation from './components/Navigation'
import Desk from './components/Desk';
import Library from './components/Library';
import HomePage from './components/HomePage';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Navigation/>} />

        {/* {Library} */}
        <Route path='/desk/library' element={<Library /> } />

        {/* {Desk} */}
        <Route path='/desk' element={ <Desk /> } />
      </Routes>


    </div>
  );
}

export default App;
