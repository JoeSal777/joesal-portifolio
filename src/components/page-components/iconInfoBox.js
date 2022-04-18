import React from 'react';

function iconInfoBox(props){
    return(
        <div className="iconInfo_area">
            <div className="text-area-iconInfo">
                <p className="title-iconInfo">
                    <b>{props.role}</b>&ensp;·&ensp;
                    {props.institution}&ensp;·&ensp; 
                    {props.designation}&ensp;·&ensp; 
                    {props.timeline}
                </p>
            </div>
        </div> 
    );
}
export default iconInfoBox;