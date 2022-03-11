import React, { Component } from 'react';

import IconInfoBox from "./page-components/iconInfoBox";

import {FaUniversity} from "react-icons/fa";
import {MdOutlineWorkOutline} from "react-icons/md";
//import {MdWork} from "react-icons/md";

export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                {/* for noisy background */}
                <div class="bg-noise-low"></div>

                <div className="resumePage_main_area">

                    <div className="resume_row">

                        {/* left-side */}
                        <div className="resume_column resume_left-column">
                            <div className="infoArea resume_content">
                                <div className="info-item">
                                    <h2 className="heading">Hi, I'm Joseph Salem.</h2>
                                    <p>A freelance web developer and designer, with a keen interest in technology and user experience.
                                        I'm all about the use and furthering of my analytical and problem solving skills in a practical
                                        environment, contributing to the resolutions of existing problems and making a meaningful 
                                        impact in a world of evolving technologies.
                                    </p>
                                </div>

                                <div className="info-item history-area education">   
                                    <div className='history-icon-area info-item-history'>                                 
                                        <FaUniversity className="history-icon"/>
                                    </div>
                                    <div className="info-item-history history-items">
                                        <div className="history-item">
                                            <IconInfoBox title={"University of Ghana"} text={"BSc Mathematics"}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-item history-area work">
                                    <div className='history-icon-area info-item-history'> 
                                        <MdOutlineWorkOutline className="history-icon"/>
                                    </div>
                                    <div className="info-item-history history-items">
                                        <div className="history-item">
                                            <IconInfoBox title={"Phoenix Life Assurance"} text={"Insurance Officer"}/>
                                        </div>
                                        <div className="history-item">
                                            <IconInfoBox title={"Phoenix Life Assurance"} text={"Insurance Officer"}/>
                                        </div>
                                    </div>                                  
                                </div>
                            </div>
                        </div>

                        {/* right-side */}
                        <div className="resume_column resume_right-column">
                            
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}