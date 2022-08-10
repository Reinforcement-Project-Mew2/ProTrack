import * as React from 'react';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import './styles.scss';

function App () {
        return (
        <main>
            <div className = 'loginContainer'>
                <h1 className = "home">Welcome to ProTrack! Please Sign in</h1>
                <nav>
                    <Link to="/dashboard">
                    Dashboard
                    </Link>{' '}
                    |{' '}
                    <Link to="/login">
                    Login
                    </Link>{' '}
                    |{' '}
                    <Link to="/signup">
                    Sign Up
                    </Link>
                    <Outlet/>
                 </nav>
            </div>
        </main>
        )
    }
      export default App;