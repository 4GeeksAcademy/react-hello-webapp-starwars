import React from 'react';
import { Link } from 'react-router-dom';
import starWarsLogo from '../../img/starwars.png'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img
                    src={starWarsLogo}
                    alt="Star Wars Logo"
                    style={{ width: '40px', height: '40px', marginRight: '10px' }} // Ajusta el tamaño según sea necesario
                />
                <span>Star Wars Info</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
