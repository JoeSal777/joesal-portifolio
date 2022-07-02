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
                            scope='Agency Website'
                            date='2021'
                        />
                        <Project  
                            heading='Mista Maja' 
                            scope='Photography Website'
                            date='2022'
                        />
                        <Project 
                            heading='Loubna Sabbah'
                            scope='Portifolio Website'
                            date='2020'
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Projects;