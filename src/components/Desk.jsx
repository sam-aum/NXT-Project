import {Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Desk(props){
    const [books, setBooks] = useState([])

    useEffect(()=>{
       
        const books = localStorage.getItem('books');
        const book = JSON.parse(books)
        console.log(book)
        setBooks(book)
    }, [])

    // push to an array
    // boolean sort filter
    // two models


    
    return (
        
        <div>
            <header className='header'>
                <h1 className="header__title">Desk</h1>
            </header>
            {books &&
                books.map((book, index) => (                 
                            
                    <div className='container' className='bookResult' key={index}>                 
                        <div className="row myRow1">
                            <div className="col-lg-10 myCol bookInfo">
                                                                
                                <h2>
                                    {index+1}. {' '}
                                    {book.title} 
                                </h2>
                                
                                <h3>
                                    {'By: '}
                                    {book.authors}
                                </h3>

                                <p>{book.description}</p> 
                            </div>    
                            <div className="col-lg-2 myCol bookImage">      
                                <img 
                                    src={book.imageLinks} 
                                    alt={book.title}
                                />
                            </div>   
                                           
                        </div>                           
                    </div>
                ))
            }

                <Link to='/desk/bookshelf'>
                    <h2>Book Shelf</h2>
                </Link>

                <Link to='/desk/library'>
                    <h2>Library</h2>
                </Link>
                
        </div>

    )
}

export default Desk