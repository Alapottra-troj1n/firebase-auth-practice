import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user,logOut} = useFirebase();
    return (
        <div className="navbar">
            <Link className="nav-link" to='/'>Home</Link>
            {user?.displayName && <span>{user.displayName}</span>}
           {user?.uid ? <button onClick={logOut} >log out</button> : <Link className="nav-link" to='/login'>Login</Link> }
            {user?.uid ? '' : <Link className="nav-link" to='/register'>Register</Link>}
        </div>
    );
};

export default Header;