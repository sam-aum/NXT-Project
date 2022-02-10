import {Link} from 'react-router-dom'


function Navigation(props){
    return (
        
        <nav className="navigation">
            <h1>H|App|Y!</h1>
            <div className="navigation__links-wrapper">
                <Link to='/holidays'>
                    <p>All Holidays</p>
                </Link>
                <Link to='/holidays/new'>
                <p>Create Holiday</p>
                </Link>
            </div>
        </nav>

    )
}

export default Navigation