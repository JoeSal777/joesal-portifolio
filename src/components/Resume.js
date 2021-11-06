import React, { Component } from 'react';

export default class Resume extends Component {
    render() {
        return (
            <div className="resumePage_main_area">

                <div className="row">

                    {/* left-side */}
                    <div className="column left-column">
                        <div className="infoArea content">
                            <h2 className="heading">Hi, I'm Joseph Salem.</h2>
                            <p>A freelance web developer and designer, passionate about data science, technology in general and music.</p>
                        </div>
                    </div>

                    {/* right-side */}
                    <div className="column right-column">
                        
                    </div>
                </div>

            </div>
        )
    }
}