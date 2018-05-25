import React from 'react'
import Hero from '../containers/Hero'

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <Hero
                    header="Let's Get In Touch"
                    subHeader="Tell me about yourself and what I can do for you."
                    bg="contact-bg"
                />
                <div className="full-width-row cta-form--bg">
                    <div className="row-container">
                        <form className="cta-form">
                            <label className="cta-form__label">Name</label>
                            <input type="text" className="cta-form__input" />
                            <label className="cta-form__label">Email</label>
                            <input type="text" className="cta-form__input" />
                            <label className="cta-form__label">Subject</label>
                            <input type="text" className="cta-form__input" />
                            <label className="cta-form__label">Message</label>
                            <textarea className="cta-form__textarea" />
                            <button className="btn btn--white">
                                send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}