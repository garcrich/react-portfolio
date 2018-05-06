import React from 'react';

class CallToAction extends React.Component {
    render() {
        return (
            <div className="full-width-row cta-bg">
                <div className="row-container text-center">
                    <h2 className="cta__header h1-header h1-header--blue">Let's Connect</h2>
                    <p className="cta__para para">Have a project in mind? Want me to speak at your event? Let's talk.</p>
                    <button className="btn btn--white center-content">Send Message</button>
                </div>
            </div>
        );
    }
}

export default CallToAction;