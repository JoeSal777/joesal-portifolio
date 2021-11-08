import React from 'react';

function iconInfoBox(props){
    return(
        <div className="iconInfo_area">
            <div className="tex-area-iconInfo">
                { props.title && <p className="title-iconInfo">{props.title}</p> }
                { props.text && <p className="text-iconInfo">{props.text}</p> }
            </div>
        </div> 
    );
}
export default iconInfoBox;