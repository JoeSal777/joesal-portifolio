import React, { Component } from 'react'

import socialbuzzdigital_img from "../images/socialbuzzdigital_website.jpg";

import Project from "./page-components/project";

//import "../styles/homeBackground.js"

class Projects extends Component {
    render(){
        return(

            <div className="projectsPage_main_area">
                <div className='Projects_wrapper'>
                    <div className='project_cards'>
                        <Project
                            heading='Social Media Buzz' 
                            img={socialbuzzdigital_img} 
                            imgAlt='Social Media buzz Homepage'
                            scope='Website Developement'
                            date='2021'
                        />
                        <Project  
                            heading='ZenFusion Academy'
                        />
                        <Project 
                            heading='Loubna Sabbah'
                        />
                        <Project 
                            heading='Welcome to project 4'
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Projects;