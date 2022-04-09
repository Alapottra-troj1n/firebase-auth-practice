import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {signinWithGoogle} = useFirebase();

    return (
        <div className='login'>
            <h2>Login</h2>
            <button onClick={signinWithGoogle}>Sign up with Google</button>
            <form>
                <br />
                <input placeholder='email' type="email" name="login-email" id="login-email" />
                <br />
                <input placeholder='password' type="password" name="login-password" id="login-passwrd" />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;