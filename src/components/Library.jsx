import {useEffect, useState} from 'react'
import staticData from '../data'
import {Link, useNavigate} from 'react-router-dom'

function Library(){

    const [books, setBooks] = useState([...staticData] || [])
    const [searchInput, setSearchInput] = useState("")

    let navigate = useNavigate()
   

    // Fetch //
    const handleFetch = async (query) => {  
        const key = process.env.REACT_APP_API_KEY
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&api_key=${key}`

        console.log(query)
        console.log(key)
        const options = {
            headers: {
                'Accept': "application/json"
            }
        }

        fetch(URL, options)
            .then(resp=>{        
                return resp.json()
            })
            .then(data=>{
                console.log(data.items)

                setBooks(data.items)       
            })
    }

    //Post fetch to Backend //
    const addBook = async (data) =>{
        const URL = "http://localhost:8000/bookshelf"
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
        }
        try {
            console.log('data inside addBook', data)
            const addedBook = await fetch(URL,options)
            // console.log(addedBook)
            const parsedBooks = await addedBook.json()
            console.log(parsedBooks)
            setBooks([...books, parsedBooks])
            navigate('/desk/bookshelf')            
  
        }catch(err){
            console.log(err)
        }
    }

    // handleChange //
    const handleChange = (e) =>{
        setSearchInput(e.target.value)
    }

    // handleSubmit
    const handleSubmit= (e) => {
        e.preventDefault()
        handleFetch(searchInput)    
    }

    // useEffect //
    useEffect(()=>{
        handleFetch(searchInput)
    }, [])



    // handleClick //
    const handleClick = ({title, authors, description, imageLinks})=>{
        addBook({title, authors: authors[0], description, imageLinks: imageLinks.thumbnail})
    }

    console.log(books)
    
    return (
        
        <div>
        
           
            <header className='header'>
                
                 {/* {The Heading} */}
                <h1 className="header__title">The Library</h1>

                {/* The Search Bar */}
                <form className="header__form" onSubmit={handleSubmit}> 
                    <input 
                    className="form__input-text"
                    type="text" 
                    name="query"
                    placeholder="search for books" 
                    onChange={handleChange}
                    value={searchInput}
                    />                    
                    <button type='submit'>Search</button>
                </form>
            </header>

            {/* Searched books display */}
            {books &&
                books.map((book, index) => (
                    <div className='bookResult' key={book.id}>
                        {book.volumeInfo ? 
                            <div>
                                <button onClick={() => handleClick(book.volumeInfo)}>
                                    Add to Book Shelf
                                </button>

                                
                                <h2>
                                    {index+1}. {' '}
                                    {book?.volumeInfo?.title}
                                </h2>
                                <h3>
                                    {'By: '}
                                    {book?.volumeInfo?.authors}
                                </h3>

                                <img 
                                src={book?.volumeInfo?.imageLinks?.thumbnail} 
                                alt={book?.volumeInfo?.title}
                                />

                                {/* <h4>{book.searchInfo.textSnippet}</h4> */}
                                <h4>{book?.volumeInfo?.description}</h4>
                                <br /><br />
                            </div>
                            : 
                            <p>{'its not working'}</p>
                        }
                    </div>
                ))
            }

            <Link to='/desk/bookshelf'>
                <h2>Book Shelf</h2>
            </Link>

            <Link to='/desk'>
                <h2>Desk</h2>
            </Link>


        </div>

    )
}

export default Library