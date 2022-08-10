import * as React from 'react';
import SidebarItem from './SidebarItem'
import projects from '/Users/dennis/Documents/GitHub/Projects/ProTrack/server/server.js'
import '../styles.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            { projects.map }
        </div>
    )
}


export default Sidebar;

