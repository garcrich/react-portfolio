import React from 'react';
import Hero from '../containers/Hero';
import axios from 'axios';

export default class Contact extends React.Component {
    state = {
        name: '',
        nameError: '',
        email: '',
        emailError: '',
        subject: '',
        subjectError: '',
        message: '',
        messageError: '',

        resData: undefined
    }

    //const {name, email, subject, message } = this.state;

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.name === '') {
            this.setState({
                nameError: 'Please provide your name'
            })
        } else {
            this.setState({
                nameError: ''
            })
        }

        if(this.state.email === '') {
            this.setState({
                emailError: 'Please provide an email address'
            })
        } else if (this.state.email === /^((?!@).)*$/ || this.state.email.indexOf('.') === -1 ) {
            this.setState({
                emailError: 'Please provide a valid email address'
            })
        } else {
            this.setState({
                emailError: ''
            })    
        }

        if(this.state.subject === '') {
            this.setState({
                subjectError: 'Please provide a subject message'
            });
        } else {
            this.setState({
                subjectError: ''
            });
        }

        if (this.state.message === '') {
            this.setState({
                messageError: 'Please leave a message'
            })
        } else {
            this.setState({
                messageError: ''
            })
        }

        setTimeout(() => {
            if(this.state.nameError === '' && this.state.emailError === '' && this.state.subjectError === '' && this.state.messageError === '') {
                axios.post('/send-email', {
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message
                }, {
                    headers: {
                        'content-type': 'application/json',
                    },
                })
                .then(response => {
                    this.setState({
                        resData: response
                    })
                    this.state.resData && console.log(this.state.resData.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                })
            } else {
                console.log('well shoot');
            }

        }, 10);


    }

    
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
                            <label className="cta-form__label" htmlFor="name">Name</label>
                            <input
                                name="name"
                                value={this.state.name}
                                onChange={e => this.change(e)}
                                type="text"
                                className="cta-form__input"
                                id="name"
                            /> 
                            <p>{this.state.nameError}</p>
                            <label className="cta-form__label" htmlFor="email">Email</label>
                            <input
                                name="email"
                                value={this.state.email}
                                onChange={e => this.change(e)}
                                type="email"
                                className="cta-form__input"
                                id="email"
                            />
                            <p>{this.state.emailError}</p>
                            <label className="cta-form__label" htmlFor="subject">Subject</label>
                            <input
                                name="subject"
                                value={this.state.subject}
                                onChange={e => this.change(e)}
                                type="text"
                                className="cta-form__input"
                                id="subject"
                            />
                            <p>{this.state.subjectError}</p>
                            <label className="cta-form__label" htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                onChange={e => this.change(e)}
                                value={this.state.message}
                                className="cta-form__textarea"
                                id="message"
                            />
                            <p>{this.state.messageError}</p>
                            <button
                                className="btn btn--white"
                                onClick={e => this.onSubmit(e)}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}