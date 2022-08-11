import * as React from 'react';
import { useState } from "react";
import ProjectDetails from './ProjectDetails';


const SidebarItem = ({detail}) => {

    const [open, setOpen] = useState(false)

    return(
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                <span>
                    <i className={detail.icon}></i>
                    {detail.title}
                </span>
                    <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"} toggle-btn`} onClick={() => setOpen(!open)}></i>
            </div>
            {
                open && 
                Object.values(detail.children).map((item, index) => {
                    if(detail.title === "Projects") {
                        return (
                            <div className="sidebar-content" key={index}>
                                <ProjectDetails detail={item}/>
                            </div>
                        )
                    }
                    else {
                        return(
                            <div className="sidebar-content" key={index}>
                                {item.title}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}


export default SidebarItem;