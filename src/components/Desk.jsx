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

            <div className='carousel'>
                <button className='carousel_button carousel_button--left'>
                    {'<'}
                </button>
                <div className="carousel_track-container">
                    {books &&
                        books.map((book, index) => ( 
                            <ul className="carousel_track">
                                <li className="carousel_slide">
                                    <img className='carousel_image'
                                        src={book.imageLinks}
                                        alt={book.title}
                                    />                            
                                </li>                        
                                                 
                            </ul>  
                        ))
                    } 
                </div>
                <button className='carousel_button carousel_button--right'>
                    {'>'}
                </button>

                <div className='carousel_nav'>
                    <button className="carousel_indicator current_slide"></button>
                    <button className="carousel_indicator"></button>
                    <button className="carousel_indicator"></button>

                </div>
            </div>   
            {books &&
                books.map((book, index) => (                 
                            
                    <div className='container bookResult' key={index}>                 
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

       
                
        </div>

    )
}

export default Desk