import * as React from 'react';
import { useState } from "react";



const SidebarItem = () => {

    const [open, setOpen] = useState(false)

    return(
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                <span>
                    <i className="bi-list"></i>
                    Projects
                </span>
                    <i className="bi bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
            </div>
            <div className="sidebar-content">
                ProTrack
            </div>
            
        </div>
        
    )
}


export default SidebarItem;