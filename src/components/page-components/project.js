import React, {Component} from'react';


class Project extends Component{
    render(){
        return (
            <div className='projectArea'>
                <h1>{this.props.heading}</h1>
            </div>
            );
    }
}

export default Project;