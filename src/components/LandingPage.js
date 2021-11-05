import React, { Component } from 'react'
import young_developer from "../images/young_developer2.png";
import {Link} from "react-router-dom"; 

import {BsCodeSlash} from "react-icons/bs";
import {DiPython} from "react-icons/di";
import {GiViolin} from "react-icons/gi";

//import "../styles/homeBackground.js"

class LandingPage extends Component {
    render(){
        return(

            <div className="landingPage_main_area">

                {/* featured image */}
                <div className="image-wrapper">
                    <div className="young_developer_img">
                        <img src={young_developer} className="img-fluid" alt="Joseph Larkai" />
                    </div>
                </div>

                {/* title */}
                <div className="title-wrapper tittle-element">
                    <div className="title">
                        <h1>Joseph Salem Mensah-Larkai</h1>
                    </div>
                </div>

                {/* attributes */}
                <ul className="home-attributes">
                    <li>
                        <Link to="/resume"><BsCodeSlash className="attribute-icon"/>Web Developer.</Link>
                    </li>
                    <li>
                        <Link to="/resume"><DiPython className="attribute-icon"/>Pythonista.</Link>
                    </li>
                    <li>
                        <Link to="/resume"><GiViolin className="attribute-icon"/>Violinist.</Link>
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

export default LandingPage;