import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'

import Navigation from './components/Navigation'
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navigation />
      <BookDetail />
      <BookList />
    </div>
  );
}

export default App;
