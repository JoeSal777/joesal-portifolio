import React, { Component } from 'react';

import IconInfoBox from "./page-components/iconInfoBox";

import {FaUniversity} from "react-icons/fa";

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
                                    <p>A freelance web developer and designer, passionate about data science, technology in general and music.</p>
                                </div>

                                <div className="info-item history-area">
                                    <div className="history-item">
                                        <FaUniversity className="history-icon"/>
                                        <IconInfoBox title={"University of Ghana"} text={"BSc Mathematics"}/>
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