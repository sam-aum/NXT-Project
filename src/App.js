import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import staticData from './data'
import {Route, Routes, useNavigate} from 'react-router-dom'

import Navigation from './components/Navigation'
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';

function App() {

  const[books, setBooks] = useState([...staticData])













  return (
    <div className="App">
      {/* <Navigation/> */}
      <Routes>
        <Route path='/' element={<Navigation/>} />
      </Routes>
        <BookDetail />
        <BookList books={books} />
    </div>
  );
}

export default App;
