import './App.css';
import {Route, Routes} from 'react-router-dom'

import Navigation from './components/Navigation'
import Desk from './components/Desk';
import Library from './components/Library';
import HomePage from './components/HomePage';
import BookShelf from './components/BookShelf';

function App() {

  

  return (
    <div className="App">

      <Navigation/>

      <Routes>
        {/* Home Page */}
        <Route path='/' element={<HomePage/>} />

        {/* {Library} */}
        <Route path='/desk/library' element={<Library /> } />

        {/* {Book Shelf} */}
        <Route path='/desk/bookshelf' element={ <BookShelf /> } />

        {/* {Desk} */}
        <Route path='/desk' element={ <Desk /> } />
      </Routes>


    </div>
  );
}

export default App;
