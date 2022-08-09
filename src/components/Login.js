import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.scss';

const Login = () => {

    return (
        <div class = "login">
        <div id='loginBox'>
            <label><strong>Log In</strong></label><br/>
            <form method='POST' action='/api/login'>
                <input type='text' placeholder='Username' name='username' required></input>
                <input type='text' placeholder='Password' name='password' required></input>
                <button type='submit' id='loginlink'>Login</button>
            </form>
            <Link to='/signup' id='signuplink'>
                <p>Create new account</p>
            </Link>
        </div>
        </div>
    )
}

export default Login;