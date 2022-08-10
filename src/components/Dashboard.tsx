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



    let responseObj = {};
    const renderArray = [];
    const taskArray = [];


    fetch('http://localhost:3000/placeholder')
            .then (data => data.json())
            .then (data => console.log(data))

    
    for (const key in responseObj) {
        setProjectName(responseObj.key.project_name = project_name)
        setProjectCreatedBy(responseObj.key.project_created_by = project_created_by)
        setProjectMembers(responseObj.key.project_members = project_members)
        setProjectDescription(responseObj.key.project_description = project_description)
        setProjectStartDate(responseObj.key.project_start_date = project_start_date)
        setProjectEndDate(responseObj.key.project_end_date = project_end_date)
        renderArray.push("<div>{responseObj.key.project_name}<div>") //long string example
        if(responseObj.key.tasks) {
            for(const key2 in responseObj.key.tasks) {
                taskArray.push("<div>{response.key.tasks.key2.task_name}</div>") //long strings
            }
        }
    }


    React.useEffect(() => {
        //return for unmount cycle
    })
    
    


    return (
    <main>
        <div className = "timelineContainer">
            {/* <Navbar/> */}
        <div className = "timeline">
        TIMELINE!
        <button className = "addTaskButton">Add Task</button>
        <Tasklist></Tasklist> 
        {/* {renderArray} */}
        {/* {taskArray}*/}
        <Deadline/>
        
        </div>
        
        </div>
    </main>

    )
}

export default dashboard;