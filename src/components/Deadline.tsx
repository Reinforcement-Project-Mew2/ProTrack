import { AnyKeys } from 'mongoose';
import * as React from 'react';
import '../styles.scss';

const deadline = (props:any) => {
    return (
<div className = "deadline">
    <div className = "projectTitle">Project Name: {props.projectName}</div>
        <div>Created by: {props.projectCreatedBy}</div>
        <div>Description: {props.projectDescription}</div>
        <div>Start Date: {props.projectStartDate}</div>
        <div>End Date: {props.projectEndDate}</div>
        <div>Members: {props.projectMembers}</div>
</div>

    )
}

export default deadline;