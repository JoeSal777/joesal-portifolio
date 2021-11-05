import React, { Component } from 'react';

import {GrInstagram} from "react-icons/gr";
import {FaLinkedin} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import {FaGithub} from "react-icons/fa";

class ContactSocialButtons extends Component {
    render() {
        return (
            <div className="socialButtonArea">
                <ul>
                    <li className="socialButton">
                        <a className="hvr-bob linkedIn-btn-bckgd" href="https://www.instagram.com/joe__salem/" target="_blank" rel="noopener noreferrer">
                            <div className="linkedIn-btn">
                                <FaLinkedin className="icon"/>
                                <p>LinkedIn</p>
                            </div>
                        </a>
                    </li>

                    <li className="socialButton">
                        <a className="hvr-bob instagram-btn-bckgd" href="https://www.instagram.com/joe__salem/" target="_blank" rel="noopener noreferrer">
                            <div className="instagram-btn">
                                <GrInstagram className="icon"/>
                                <p>Instagram</p>
                            </div>
                        </a>
                    </li>

                    <li className="socialButton">
                        <a className="hvr-bob mail-btn-bckgd" href="https://www.instagram.com/joe__salem/" target="_blank" rel="noopener noreferrer">
                            <div className="mail-btn">
                                <HiMail className="icon"/>
                                <p>Mail</p>
                            </div>
                        </a>
                    </li>

                    <li className="socialButton">
                        <a className="hvr-bob gitHub-btn-bckgd" href="https://www.instagram.com/joe__salem/" target="_blank" rel="noopener noreferrer">
                            <div className="gitHub-btn">
                                <FaGithub className="icon"/>
                                <p>GitHub</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactSocialButtons;