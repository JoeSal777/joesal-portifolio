import React, { Component } from 'react'
import {Link} from "react-router-dom"; 

import Project from "./page-components/project";

//import "../styles/homeBackground.js"

class Projects extends Component {
    render(){
        return(

            <div className="projectsPage_main_area">
                <Project heading='Welcome to project'/>
            </div>

            
        )
    }
}

export default Projects;