import {Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Desk(){
    const [books, setBooks] = useState([])

    const handleFetch = async () => {  

        const URL = "http://localhost:8000/desk"
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

    useEffect(()=>{
        handleFetch()
    }, [])

    return (
        
        <div>
            <header className='header'>
                <h1 className="header__title">Desk</h1>
            </header>
            {books &&
                books.map((book, index) => (
                    <div className='bookResult' key={book.id}>
                    
                            <div>
                                                            
                                <h2>
                                    {index+1}. {' '}
                                    {book.title} 
                                </h2>
                                <h3>
                                    {'By: '}
                                    {book.authors}
                                </h3>
                                <img 
                                    src={book.imageLinks} 
                                    alt={book.title}
                                />
                                <p>{book.description}</p>

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