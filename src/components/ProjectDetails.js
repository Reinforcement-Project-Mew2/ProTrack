import * as React from 'react';
import { useState } from "react";



const ProjectDetails = ({detail}) => {

    const [open, setOpen] = useState(false)

    const tasksItems = Object.values(detail.tasks).map((task, index) => {
        return(
            <div className="sidebar-content" key={index}>
                {task.title}
            </div>
        )
    })

    return(
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                <span>
                    <i className={detail.icon}></i>
                    {detail.project_name}
                </span>
                    <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"} toggle-btn`} onClick={() => setOpen(!open)}></i>
            </div>
            {
                open && tasksItems
            }
        </div>
    )
}


export default ProjectDetails;