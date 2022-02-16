import {Link} from 'react-router-dom'


function Navigation(props){
    return (
        
        <nav className="navigation">
            <Link to='/'>
                <h1>NXT</h1>
            </Link>
            <div className="navigation__links-wrapper">
                <Link to='/desk'>
                    <p>Desk</p>
                </Link>
                <Link to='/desk/bookshelf'>
                    <p>Book Shelf</p>
                </Link>
                <Link to='/desk/library'>
                    <p>Library</p>
                </Link>
                
                
            </div>
        </nav>

    )
}

export default Navigation