import React, {useState, useEffect}from 'react';
import SidebarItem from './SidebarItem'
// import projects from '/Users/dennis/Documents/GitHub/Projects/ProTrack/server/server.js'
import '../styles.scss';
import SidebarResponse from '../../server/data/SidebarMenu';


const Sidebar = () => {
    const [sidebarDetails, setSideBarDetails] = useState(SidebarResponse)

    // useEffect(() => {
    //     fetch(backend)
    //     .then(setSideBarDetails(rresponse.json()))
    // }, [])

    return (
        <div className="sidebar">
            { sidebarDetails.map((item, index) => <SidebarItem key={index} detail={item} />)}
        </div>
    )
}


export default Sidebar;

