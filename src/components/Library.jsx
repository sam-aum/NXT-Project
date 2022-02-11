

function BookList(props){


    const {books} = props  

    console.log(books)
    return (
        
        <div>
            <h1>The Library</h1>
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

export default BookList