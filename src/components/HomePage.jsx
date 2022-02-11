import {Link} from 'react-router-dom'

function HomePage(props){
    return (
        
        <div>
            <h1>Home Page</h1>

            <Link to='/desk'>
                <h2>Books</h2>
            </Link>
        </div>

    )
}

export default HomePage