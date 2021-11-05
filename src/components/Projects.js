import React, { Component } from 'react'
import underConstruction from "../images/under-construction.png";
import {Link} from "react-router-dom"; 

//import "../styles/homeBackground.js"

class Projects extends Component {
    render(){
        return(

            <div className="errorPage_main_area landingPage_main_area">

                {/* featured image */}
                <div className="image-wrapper">
                    <div className="young_developer_img">
                        <img src={underConstruction} className="img-fluid" alt="Joseph Larkai" />
                    </div>
                </div>

                {/* title */}
                <div className="title-wrapper tittle-element">
                    <div className="title">
                        <h1>This page is under construction</h1>
                    </div>
                </div>

                {/* attributes */}
                <ul className="home-attributes">
                    <li>
                        <Link to="/">return home.</Link>
                    </li>
                </ul>

                {/* Put city stencil design here */}

                <div className="landingPage_buttom">
                    {/* <ProgressBar className="landing_page_progressBar" progress={0} buffer={0} /> */}
                </div>
            </div>

            
        )
    }
}

export default Projects;