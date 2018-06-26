import React from 'react';
import Hero from '../containers/Hero';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('div');

const customStyles = {
    content: {
        top: 'calc(50% + 27.5px)',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '35%',
        minWidth: '250px',
        height: '25%',
        minHeight: '250px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "0",
        borderRadius: "3px",
        border: "none"
    }
};

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

        resData: '',

        modalIsOpen: false
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name === '') {
            this.setState({
                nameError: 'Please provide your name'
            })
        } else {
            this.setState({
                nameError: ''
            })
        }

        if (this.state.email === '') {
            this.setState({
                emailError: 'Please provide an email address'
            })
        } else if (this.state.email === /^((?!@).)*$/ || this.state.email.indexOf('.') === -1) {
            this.setState({
                emailError: 'Please provide a valid email address'
            })
        } else {
            this.setState({
                emailError: ''
            })
        }

        if (this.state.subject === '') {
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
            if (this.state.nameError === '' && this.state.emailError === '' && this.state.subjectError === '' && this.state.messageError === '') {
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
                            resData: response.data
                        });

                        this.setState({
                            modalIsOpen: true
                        });

                        this.setState({
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                        })

                    })
                    .catch(function (error) {
                        console.log(error.response);
                    })
            } else {
                this.setState({
                    resData: 'Oops! Something went wrong!'
                });
            }
        }, 10);

    }


    render() {
        return (
            <div id="contactForm">
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
                                style={{ margin: `${this.state.nameError.length > 0 ? "0" : ''}` }}
                            />
                            <p className="form-error">{this.state.nameError}</p>
                            <label className="cta-form__label" htmlFor="email">Email</label>
                            <input
                                name="email"
                                value={this.state.email}
                                onChange={e => this.change(e)}
                                type="text"
                                className="cta-form__input"
                                id="email"
                                style={{ margin: `${this.state.emailError.length > 0 ? "0" : ''}` }}
                            />
                            <p className="form-error">{this.state.emailError}</p>
                            <label className="cta-form__label" htmlFor="subject">Subject</label>
                            <input
                                name="subject"
                                value={this.state.subject}
                                onChange={e => this.change(e)}
                                type="text"
                                className="cta-form__input"
                                id="subject"
                                style={{ margin: `${this.state.subjectError.length > 0 ? "0" : ''}` }}
                            />
                            <p className="form-error">{this.state.subjectError}</p>
                            <label className="cta-form__label" htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                onChange={e => this.change(e)}
                                value={this.state.message}
                                className="cta-form__textarea"
                                id="message"
                                style={{ margin: `${this.state.messageError.length > 0 ? "0" : ''}` }}
                            />
                            <p className="form-error">{this.state.messageError}</p>
                            <button
                                className="btn btn--white"
                                onClick={e => this.onSubmit(e)}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                    closeTimeoutMS={150}
                    overlayClassName="formOverlay"
                >
                    <div className="modalHeader-container">
                        <span className="modalHeader-container__text">Your message was sent!</span>
                        <i className="fa fa-times modalHeader-container__close-icon" aria-hidden="true" onClick={this.closeModal}></i>

                    </div>

                    <div className="modal-body">
                        <p className="modal-body__text">{this.state.resData}</p>
                        <p>I'll be in touch with you soon.</p>
                    </div>

                    <button className="btn btn--white" style={{
                        textAlign: "center", margin: "10px auto",
                        display: "block"
                    }} onClick={this.closeModal}>Close</button>
                </Modal>
            </div>
        );
    }
}