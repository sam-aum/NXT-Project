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
  const [searchInput, setSearchInput] = useState("")

  const handleFetch = async (query) => {  
    const key = process.env.REACT_APP_API_KEY
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&api_key=${key}`
    const options = {
      headers: {
        'Accept': "application/json"
      }
    }

    fetch(URL)
    .then(resp=>{
        console.log(resp)
        return resp.json()
    })
    .then(data=>{
        console.log(data)
     
        setBooks(data)
        
    })

  }

  const handleChange = (e) =>{
    setSearchInput(e.target.value)
}
const handleSubmit= (e) => {
  e.preventDefault()

  handleFetch(searchInput)
  
}


  useEffect(()=>{
   
    handleFetch(searchInput)
  }, [])







  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Navigation/>} />
      </Routes>

      <form onSubmit={handleSubmit}> 
            <input 
            type="text" 
            name="query"
            placeholder="search for books" 
            onChange={handleChange}
            value={searchInput}/>
            <input type ='submit' value='Search'/>
      </form>


        <BookDetail />
        <BookList books={books} />


    </div>
  );
}

export default App;
