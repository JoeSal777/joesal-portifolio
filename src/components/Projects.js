import React, { Component } from 'react'

import socialbuzzdigital_img from "../images/socialbuzzdigital_website.jpg";
import loubnasabbah_img from "../images/loubnasabbah_website.jpg";

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
                            sitelink='https://www.socialbuzzdigital.com/'
                        />
                        <Project  
                            heading='Mista Maja' 
                            scope='Photography Website'
                            date='2022'
                        />
                        <Project 
                            heading='Loubna Sabbah'
                            img={loubnasabbah_img} 
                            imgAlt='Loubna Sabbah Homepage'
                            scope='Portifolio Website'
                            date='2020'
                            sitelink='https://loubnasabbah.com/'
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Projects;