import {Link} from 'react-router-dom'


function Navigation(props){
    return (
        
        <nav className="navigation">
            <Link to='/'>
                <h1>NXT</h1>
            </Link>
            <div className="navigation__links-wrapper">
                
                <p>Nav Bar Icon</p>
                
                <p>Edit</p>
                
            </div>
        </nav>

    )
}

export default Navigation