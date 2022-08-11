import * as React from 'react';
import '../styles.scss';

const tasklist = (props:any) => {
console.log(props.tasks)

const taskArray = [];

for(const key in props.tasks) {
    let arr = [];
    arr.push(<div className = "taskTitle">{props.tasks[key].task_name}</div>)
    arr.push(<div>Created by: {props.tasks[key].task_created_by}</div>)
    arr.push(<div>Members: {props.tasks[key].task_members} </div>)
    arr.push(<div>Description: {props.tasks[key].task_content}</div>)
    arr.push(<div>Start Date: {props.tasks[key].task_start_date}</div>)
    arr.push(<div>End Date: {props.tasks[key].task_end_date} </div>)
    taskArray.push(arr)
}


    return (
<div>
    <div className = "tasklist">
        <div className = "classContainer">
        {taskArray}
        </div>
    </div>
</div>

    )
}

export default tasklist;