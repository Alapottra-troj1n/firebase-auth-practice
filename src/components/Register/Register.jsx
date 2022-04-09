import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <button>Sign up with Google</button>
            <form>
                
                <br />
                <input placeholder="username" type="text" name="user-name" id="register-user-name"  />
                <br />
                <input type="email" name="register-email" id="register-email" />
                <br />
                <input type="password" name="" id="register-password" placeholder="password" />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;