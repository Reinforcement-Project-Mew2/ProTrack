import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';
import Sidebar from './Sidebar';


const dashboard = () => {
    return (
<div>
    <h1>Hello World!</h1>
    <Sidebar/>
    <div className = "timeline">
        TIMELINE!
    </div>
</div>

    )
}

export default dashboard;