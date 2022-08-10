import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';

const Signup = () => {

    return (

        <div className = "loginContainer" id='signupBox'>
            <label><strong>Create Account</strong></label><br/>
            <form method='POST' action='/api/signup'>
                <input type='text' placeholder='First Name' name='firstname' required></input>
                <input type='text' placeholder='Last Name' name='lastname' required></input>
            <div>
                <input type='text' placeholder='Username' name='username' required></input>
                <input type='text' placeholder='Password' name='password' required></input>
            </div>
                <button type='submit'>Sign Up</button>
            </form>
            <Link to='/login' id='loginlink'>
                <p>Already have an account?</p>
            </Link>
        </div>

    )
}

export default Signup;