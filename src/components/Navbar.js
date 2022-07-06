import React, { Component } from 'react';
import logo from '../logoblue.jpg';
import {FaAlignRight} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {Link} from "react-router-dom"; 


class Navbar extends Component {
    
    state={
        isOpen: false
    }
    //as name says, handles the toggle on mobile view
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    resetToggle = () =>{
        this.setState({isOpen:false})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        
                        {/* For contact-me icon in mobile view */}
                        <Link to="/contact" className="nav-btn-small-screen" onClick={this.resetToggle}>
                            <button type="button">
                                <FiMail className="Nav-icon" />   
                            </button>
                        </Link>
                        
                        
                        {/* For logo */}
                        <Link to="/" onClick={this.resetToggle} className='nav_logo'>
                            <img src={logo} alt="Joseph Larkai Logo" />
                        </Link>

                        

                        {/* For menu icon in mobile view */}
                        <button type="button" className="nav-btn-small-screen" onClick={this.handleToggle}>
                            <FaAlignRight className="Nav-icon" />   
                        </button> 
                    </div>

                    {/* For nav menu */}
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/resume" onClick={this.handleToggle}>Resume.</Link>
                        </li>
                        <li>
                            <Link to="/projects" onClick={this.handleToggle}>Projects.</Link>
                        </li>
                    </ul>

                    {/* For contact me icon in nav-bar big screen */}
                    <Link to="/contact" className="nav-btn-big-screen">
                        <button type="button">
                            <FiMail className="Nav-icon" />  
                        </button>
                    </Link>

                </div>
            </nav>
        );
    }
}

export default Navbar;