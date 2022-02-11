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
    // const options = {
    //   headers: {
    //     'Accept': "application/json"
    //   }
    // }

    fetch(URL) //fetch(URL, options)
        .then(resp=>{        
            return resp.json()
        })
        .then(data=>{
            console.log(data.items)
            setBooks(data.items)       
        })
    }

    // useEffect //
    useEffect(()=>{
        handleFetch('children of time')
    }, [])

    // // handleChange //
    // const handleChange = (e) =>{
    //     setSearchInput(e.target.value)
    // }

    // // handleSubmit
    // const handleSubmit= (e) => {
    //     e.preventDefault()
    //     handleFetch(searchInput)    
    // }

    console.log(books)
    
    return (
        
        <div>
            {/* {The Heading} */}
            <h1>The Library</h1>

            {/* The Search Bar */}
            {/* <form onSubmit={handleSubmit}> 
                <input 
                type="text" 
                name="query"
                placeholder="search for books" 
                onChange={handleChange}
                value={searchInput}/>
                <input type ='submit' value='Search'/>
            </form> */}


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
                            </div>
                        : 
                        <p>{'its not working'}</p>
                        }
                    </div>

            ))}
        </div>

    )
}

export default Library