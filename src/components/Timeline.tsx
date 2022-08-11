import { AnyKeys } from 'mongoose';
import * as React from 'react';
import '../styles.scss';
import TimelineItem from "./Timelineitem";

const timeline = (props:any) => {

    return (
        props.timelineData.length > 0 && (
            <div className="timeline-container">
                {props.timelineData.map((data:any, idx:any) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        )
    )
}
    

export default timeline;