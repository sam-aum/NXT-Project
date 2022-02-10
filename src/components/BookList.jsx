

function BookList(props){


    const {books} = props  


    return (
        
        <div>
            <h1>BookList</h1>
            {books &&
                books.map((book, index) => (
                <h3>{book.name}</h3>

            ))}
        </div>

    )
}

export default BookList