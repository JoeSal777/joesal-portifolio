import React, { Component } from 'react';
import ContactForm from "./ContactForm";
import ContactSocialButtons from './ContactSocialButtons';

export default class Contact extends Component {
    render() {
        return (
            <div className="contactPage_main_area">

                <div className="row">

                    {/* left-side */}
                    <div className="column left-column">
                        <ContactForm />
                    </div>

                    {/* right-side */}
                    <div className="column right-column">
                        <ContactSocialButtons/>
                    </div>
                </div>

                <div className="landingPage_buttom">
                    {/* <ProgressBar className="landing_page_progressBar" progress={0} buffer={0} /> */}
                </div>
            </div>
        )
    }
}