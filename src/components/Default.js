import React, { Component } from 'react'
import image404 from "../images/page-not-found.png";
import {Link} from "react-router-dom"; 

//import "../styles/homeBackground.js"

class LandingPage extends Component {
    render(){
        return(

            <div className="errorPage_main_area landingPage_main_area">

                {/* featured image */}
                <div className="image-wrapper">
                    <div className="young_developer_img">
                        <img src={image404} className="img-fluid" alt="Joseph Larkai" />
                    </div>
                </div>

                {/* title */}
                <div className="title-wrapper tittle-element">
                    <div className="title">
                        <h1>The page you seek cannot be found</h1>
                    </div>
                </div>

                {/* attributes */}
                <ul className="home-attributes">
                    <li>
                        <Link to="/">You may want to check if you've entered in the right address</Link>
                    </li>
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

export default LandingPage;