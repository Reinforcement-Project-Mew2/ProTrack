import * as React from 'react';
import { Link } from 'react-router-dom';
import Deadline from "./Deadline";
import Tasklist from "./Tasklist";
import Timeline from "./Timeline";
import '../styles.scss';



const testStyle = {
    backgroundColor: 'black'
}


const dashboard = () => {


    //project states
    let [project_name, setProjectName] = React.useState("");
    let [project_created_by, setProjectCreatedBy] = React.useState("");
    let [project_members, setProjectMembers] = React.useState("");
    let [project_description, setProjectDescription] = React.useState("");
    let [project_start_date, setProjectStartDate] = React.useState("");
    let [project_end_date, setProjectEndDate] = React.useState("");

    //task states
    let [tasks, setTasks]:any = React.useState({});



    let responseObj = {
            project_name: "Johnny's wonderful world",
            project_created_by: "Your boi, Johnny",
            project_members: "Johnny, Dennis, Angel, Matthew, Jace",
            project_description: "Conquer the world, give everyone cheese",
            project_start_date: "08/09/2022",
            project_end_date: "08/09/2122",
            tasks: [{   
                    task_id: 1235456,
                    task_name: "Get some cows",
                    task_created_by: "Johnny",
                    task_members: "Johnny, Dennis, Angel, Matthew, Jace",
                    task_content: "start at the source",
                    task_start_date: "08/09/2022",
                    task_end_date: "08/09/2122"
                },
                {
                    task_id: 1235456,
                    task_name: "Make a lot of cheese",
                    task_created_by: "Johnny",
                    task_members: "Johnny, Dennis, Angel, Matthew, Jace",
                    task_content: "time to feed the world",
                    task_start_date: "08/10/2022",
                    task_end_date: "08/09/2122"
                }
            ]
     }


     let timelineData = [
        {
            text: 'Get some Cows',
            date: 'August 09, 2022',
            category: {
                tag: 'Task',
                color: '#018f69'
            },
            link: {
                url:
                    'https://www.google.com/search?q=cows&tbm=isch&ved=2ahUKEwjmkd_ZtL35AhVQHTQIHZm0BX8Q2-cCegQIABAA&oq=cows&gs_lcp=CgNpbWcQAzIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIICAAQgAQQsQM6BAgjECc6BQgAEIAEOgsIABCABBCxAxCDAVCQBljfCGCXCWgAcAB4AIABVYgBswKSAQE0mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=OT30YqaRI9C60PEPmemW-Ac&bih=1297&biw=2560&rlz=1C1VDKB_enUS928US928',
                text: 'Read more about Cows'
            }
        },

        {
            text: 'Make a lot of Cheese',
            date: 'August 10, 2022',
            category: {
                tag: 'Task',
                color: '#018f69'
            },
            link: {
                url:
                    'https://www.google.com/search?q=cheese&hl=en&tbm=isch&sxsrf=ALiCzsZGErPvVIk4zy9xAXkTjMdGhvdc9A%3A1660174208073&source=hp&biw=2560&bih=1297&ei=fz_0YtTSO4KckPIPhouL2AY&iflsig=AJiK0e8AAAAAYvRNkI9VLrP_UXHrHpnzVHQdSval2aiv&ved=0ahUKEwiUjrrvtr35AhUCDkQIHYbFAmsQ4dUDCAc&uact=5&oq=cheese&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQM6BwgjEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOgUIABCABDoICAAQsQMQgwFQQVjUBmDBB2gBcAB4AIABUogBugOSAQE2mAEAoAEBqgELZ3dzLXdpei1pbWewAQo&sclient=img',
                text: 'Read more about Cheese'
            }
        },
    ];


    let renderArray: string[] = [];
    let taskArray = {};

    tasks = responseObj.tasks



    // fetch('http://localhost:3000/placeholder')
    //         .then (data => data.json())
    //         .then (data => console.log(data))

    React.useEffect(() => {
        setProjectName(project_name = responseObj.project_name)
        setProjectCreatedBy(project_created_by = responseObj.project_created_by)
        setProjectMembers(project_members = responseObj.project_members)
        setProjectDescription(project_description = responseObj.project_description)
        setProjectStartDate(project_start_date = responseObj.project_start_date)
        setProjectEndDate(project_end_date = responseObj.project_end_date)
        //return for unmount cycle
    })
    
    


    return (
    <main>
        <div className = "timelineContainer">
            {/* <Navbar/> */}
        <div className = "timeline">
        Container
        <button className = "addTaskButton">Add Task</button>
        <Tasklist 
        tasks = {tasks}
        ></Tasklist> 
        <Timeline
        timelineData = {timelineData}
        projectName = {project_name} 
        projectCreatedBy = {project_created_by} 
        projectMembers = {project_members}
        projectDescription = {project_description}
        projectStartDate = {project_start_date}
        projectEndDate = {project_end_date}
        />
        
        {/* {taskArray}*/}
        <Deadline
        projectName = {project_name} 
        projectCreatedBy = {project_created_by} 
        projectMembers = {project_members}
        projectDescription = {project_description}
        projectStartDate = {project_start_date}
        projectEndDate = {project_end_date}/>
        </div>
        
        </div>
    </main>

    )
}

export default dashboard;