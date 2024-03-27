import './navbar.css' ; 
import { Link } from 'react-router-dom';

export default function Navbar(){

    return (
        <div className="Navbar">

            <div className="navItems">
            <a href="/"  className="navItem">Home</a>
            <a href="/" className="navItem">About</a>
            <Link to="/login" className="navItem">Log in</Link>
            <Link to="/signin" className="navItem">Sign in</Link>
            </div>

        </div >
    )
}