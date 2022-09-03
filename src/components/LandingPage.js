import React, { Component } from 'react'
import young_developer from "../images/young_developer1.png";
import {Link} from "react-router-dom"; 

import {BsCodeSlash} from "react-icons/bs";
import {DiPython} from "react-icons/di";
import {GiMaterialsScience} from "react-icons/gi";

//import "../styles/homeBackground.js"

class LandingPage extends Component {
    render(){
        return(
            <React.Fragment>
                {/* for noisy background */}
                <div class="bg-noise"></div>
            
                <div className="landingPage_main_area">

                    <div className="landingPage_background">

                        <div className="ripplejkn-background">
                            {/* <div className="xxlarge-circle shade5"/> */}
                            {/* <div className="xlarge-circle shade4"/> */}
                            <div className="large-circle shade3"/>
                            <div className="medium-circle shade2"/>
                            <div className="small-circle shade1" />
                        </div>
                        
                        <div className='landingPage_contents'>
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
                                    <Link to="/resume"><DiPython className="attribute-icon"/>Pythonista.</Link>
                                </li>
                                <li>
                                    <Link to="/resume"><GiMaterialsScience className="attribute-icon"/>Data Scientist.</Link>
                                </li>
                                <li>
                                    <Link to="/resume"><BsCodeSlash className="attribute-icon"/>Web Developer.</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default LandingPage;