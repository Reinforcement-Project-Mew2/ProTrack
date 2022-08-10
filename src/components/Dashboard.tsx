import * as React from 'react';
import { Link } from 'react-router-dom';
import Deadline from "./Deadline";
import Tasklist from "./Tasklist";
import '../styles.scss';



const testStyle = {
    backgroundColor: 'black'
}


const dashboard = () => {


    //project states
    const [project_name, setProjectName] = React.useState("");
    const [project_created_by, setProjectCreatedBy] = React.useState("");
    const [project_members, setProjectMembers] = React.useState("");
    const [project_description, setProjectDescription] = React.useState("");
    const [project_start_date, setProjectStartDate] = React.useState("");
    const [project_end_date, setProjectEndDate] = React.useState("");

    //task states
    const [tasks, setTasks] = React.useState([]);



    let responseObj = {
            "project_name": "Johnny's wonderful world",
            "project_created_by": "Your boi, Johnny",
            "project_members": "Johnny, Dennis, Angel, Matthew, Jace",
            "project_description": "Conquer the world, give everyone cheese",
            "project_start_date": "08/09/2022",
            "project_end_date": "08/09/2122",
            "tasks": {
                "432423": {
                    "task_name": "Get some cows",
                    "task_created_by": "Johnny",
                    "task_members": "Johnny, Dennis, Angel, Matthew, Jace",
                    "task_content": "start at the source",
                    "task_start_date": "08/09/2022",
                    "task_end_date": "08/09/2122"
                },
                "4324222": {
                    "task_name": "Make a lot of cheese",
                    "task_created_by": "Johnny",
                    "task_members": "Johnny, Dennis, Angel, Matthew, Jace",
                    "task_content": "time to feed the world",
                    "task_start_date": "08/09/2022",
                    "task_end_date": "08/09/2122"
                }
            }
    }


    const renderArray: string[] = [];
    const taskArray = [];


    // fetch('http://localhost:3000/placeholder')
    //         .then (data => data.json())
    //         .then (data => console.log(data))

    
        
        // 
         //long string example

        // if(responseObj.tasks) {
        //     for(const key2 in responseObj.tasks) {
        //         taskArray.push("<div>{responseObj.tasks.key2.task_name}</div>") //long strings
        //     }
        // }



    React.useEffect(() => {
        setProjectName(responseObj.project_name = project_name)
        setProjectCreatedBy(responseObj.project_created_by = project_created_by)
        setProjectMembers(responseObj.project_members = project_members)
        setProjectDescription(responseObj.project_description = project_description)
        setProjectStartDate(responseObj.project_start_date = project_start_date)
        setProjectEndDate(responseObj.project_end_date = project_end_date)
        renderArray.push("<div>{responseObj.project_name}</div>")
        console.log(renderArray)
        //return for unmount cycle
    })
    
    


    return (
    <main>
        <div className = "timelineContainer">
            {/* <Navbar/> */}
        <div className = "timeline">
        TIMELINE!
        <button className = "addTaskButton">Add Task</button>
        <Tasklist>
        <div>"responseObj.project_name"</div>
        {renderArray}
        </Tasklist> 
        
        {/* {taskArray}*/}
        <Deadline/>
        
        </div>
        
        </div>
    </main>

    )
}

export default dashboard;