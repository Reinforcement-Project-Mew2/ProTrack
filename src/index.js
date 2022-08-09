import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js"
import Dashboard from "./components/Dashboard.js"
import { Routes, Route} from "react-router-dom";
import styles from './styles.scss';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
                />
            </Route>
        </Routes>

    </BrowserRouter>,

    document.getElementById('root')
);