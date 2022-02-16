import {Link} from 'react-router-dom'

function HomePage(props){
    return (
        
        <div>
            <header className='header'>
                <h1 className="header__title">Home Page</h1>
            </header>
            <Link to='/desk'>
                <h2 className='categories'>Books</h2>
            </Link>
            <Link to='/desk'>
                <h2 className='categories'>Games</h2>
            </Link>
            <Link to='/desk'>
                <h2 className='categories'>Movies</h2>
            </Link>
        </div>

    )
}

export default HomePage