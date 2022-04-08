import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/login'>Login</Link>
        </div>
    );
};

export default Header;