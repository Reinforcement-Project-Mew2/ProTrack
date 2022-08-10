import * as React from 'react';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import './styles.scss';

const App = () => {
    return(
        <main>
            <div className = 'loginContainer'>
                <h1 className = "home">Welcome to ProTrack! Please Sign in</h1>
                <nav >
                    <Link className = "navText" to="/dashboard">
                    Dashboard
                    </Link>{' '}
                    |{' '}
                    <Link className = "navText" to="/login">
                    Login
                    </Link>{' '}
                    |{' '}
                    <Link className = "navText" to="/signup">
                    Sign Up
                    </Link>
                    <Outlet/>
                 </nav>
            </div>
        </main>
        )
    }

      export default App;