import React, { Component } from 'react';

import IconInfoBox from "./page-components/iconInfoBox";
import Table from "./page-components/Table.js";

import {FaUniversity} from "react-icons/fa";
import {MdOutlineWorkOutline} from "react-icons/md";
//import {MdWork} from "react-icons/md";

//list for table in skills section
const language_list = [
    {advanced: 'Python', intermediate: 'Java', basic: 'C++'  },
    {advanced: 'Adobe Photoshop', intermediate: 'JavaScript', basic: 'C'  },
    {advanced: 'Microsoft Excel', intermediate: 'PHP', basic: 'Maya'  },
    {advanced: 'Wordpress', intermediate: 'React', basic: 'Vue.js'  },
    {advanced: 'HTML | CSS | SCSS', intermediate: 'Audacity', basic: 'GCP'  }
]
const colNames = ['Advanced', 'Intermediate', 'Basic']

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
                                        environment, contributing to the resolutions of new/existing problems and making a meaningful 
                                        impact in a world of evolving technologies.
                                    </p>
                                </div>

                                <div className="info-item history-area education">   
                                    <div className='history-icon-area info-item-history'>                                 
                                        <FaUniversity className="history-icon"/>
                                    </div>
                                    <div className="info-item-history history-items">
                                        <a href="https://www.ug.edu.gh/" target="_blank" rel="noreferrer">
                                            <div className="history-item">
                                                <IconInfoBox
                                                role={"BSc Mathematics"} 
                                                institution={"University of Ghana"} 
                                                designation={"Undergrad"}
                                                timeline={"2013-2017"}  
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item history-area work">
                                    <div className='history-icon-area info-item-history'> 
                                        <MdOutlineWorkOutline className="history-icon"/>
                                    </div>
                                    <div className="info-item-history history-items">
                                        <a href="https://assurance.cdhgroup.co/" target="_blank" rel="noreferrer">
                                        <div className="history-item">
                                                <IconInfoBox
                                                role={"Data Entry Clerk"} 
                                                institution={"Judah Shipping Agency"} 
                                                designation={"Intern"}
                                                timeline={"2015"}  
                                                />
                                            </div>
                                            <div className="history-item">
                                                <IconInfoBox
                                                role={"Insurance Officer"} 
                                                institution={"Phoenix Life Assurance"} 
                                                designation={"Intern"}
                                                timeline={"2016"}  
                                                />
                                            </div>
                                        </a>
                                        <a href="http://gema.gov.gh/" target="_blank" rel="noreferrer">
                                            <div className="history-item">
                                                <IconInfoBox
                                                    role={"Ass. Budget Officer"} 
                                                    institution={"Ga-East Municipal Assembly"} 
                                                    designation={"National Service personnel"}
                                                    timeline={"2017-2018"}  
                                                />
                                            </div>
                                        </a>
                                        <div className="history-item">
                                            <IconInfoBox
                                                role={"Junior Developer"} 
                                                institution={"QBE Ghana Limited"} 
                                                designation={"Part-time"}
                                                timeline={"2018-2020"} 
                                            />
                                        </div>
                                        <div className="history-item">
                                            <IconInfoBox
                                                role={"Programmer"} 
                                                institution={"Freelance"} 
                                                designation={"Part-time"}
                                                timeline={"2020-Present"} 
                                            />
                                        </div>
                                    </div>                                  
                                </div>
                            </div>
                        </div>

                        {/* right-side */}
                        <div className="resume_column resume_right-column">
                            <div className="techArea resume_content">
                                <div className='techinical_skills_heading'>
                                    <h4>Technical Skills</h4>
                                </div>
                                <div className='ts_section'>
                                    <div className='ts_table_section'>
                                        <Table list={language_list} colNames={colNames}/>
                                    </div>
                                </div>
                                <div className='ts_section'>
                                    <p>Problem Solving (Algorithms)</p>
                                </div>
                                <div className='ts_section'>
                                    <p>Data Science (Geospatial Data)</p>
                                </div>
                                <div className='ts_section'>
                                    <p>Web Scrapping</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}