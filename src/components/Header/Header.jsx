import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className="navbar">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/orders'>Orders</Link>
            {user?.displayName && <span>{user.displayName}</span>}
           {user?.uid ? <button onClick={()=> signOut(auth)} >log out</button> : <Link className="nav-link" to='/login'>Login</Link> }
            {user?.uid ? '' : <Link className="nav-link" to='/register'>Register</Link>}
        </div>
    );
};

export default Header;