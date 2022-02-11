import {useEffect, useState} from 'react'
import staticData from '../data'

function Library(){

    const [books, setBooks] = useState([...staticData] || [])
    const [searchInput, setSearchInput] = useState("")

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

            {books &&
                books.map((book, index) => (
                    <div key={book.id}>
                        {book.volumeInfo ? 
                            <div>
                                <h3>{book.volumeInfo.title}</h3>
                                <h3>{book.volumeInfo.authors[0]}</h3>

                                <img 
                                src={book.volumeInfo.imageLinks.thumbnail} 
                                alt={book.volumeInfo.title}
                                />

                                <h4>{book.searchInfo.textSnippet}</h4>

                                <h4>{book.volumeInfo.description}</h4>
                            </div>
                            : 
                            <p>{'its not working'}</p>
                        }
                    </div>
                ))
            }


        </div>

    )
}

export default Library