import React from 'react';
import { Link } from 'react-router-dom';

class CallToAction extends React.Component {
    render() {
        return (
            <div className="full-width-row cta-bg">
                <div className="row-container text-center">
                    <h2 className="cta__header h1-header h1-header--blue">{this.props.ctaHeader}</h2>
                    <p className="cta__para para">{this.props.ctaPara}</p>
                    <Link to="/contact">
                    <button className="btn btn--white center-content">{this.props.ctaBtnText}</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CallToAction;