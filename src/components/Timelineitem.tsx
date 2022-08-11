import * as React from 'react';
import '../styles.scss';


const timelineitem = (props:any, data:any) => {

console.log(props.data);

return(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag">
                {props.data.category.tag}
            </span>
            <time style ={{"color":"white"}}>{props.data.date}</time>
            <p>{props.data.text}</p>
            {props.data.link && (
                <a
                    href={props.data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
)};

export default timelineitem;