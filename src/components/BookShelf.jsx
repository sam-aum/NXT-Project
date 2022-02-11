import {Link} from 'react-router-dom'

function BookShelf(props){
    return (
        
        <div>
            <h1>Book Shelf</h1>

            <Link to='/desk/library'>
                <h2>Library</h2>
            </Link>
        </div>

    )
}

export default BookShelf