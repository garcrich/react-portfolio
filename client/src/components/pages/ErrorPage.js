import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {
    state = {
        display: true
    }
    
    displayNone() {
        this.setState({
            display: false
        })
    }

    render() {

        return (
            <div>
                <div className="full-width-row error-primary-bg">
                    <div className="error-div" style={{display : this.state.display ? 'block' : 'none'}}>
                        <h2 className="error-div__header text-center ">404</h2>
                        <h2 className="error-div__sub-header text-center" style={{marginBottom: "10px"}}>Oh no! Page not found.</h2>
                        <Link to={`/`} className="btn btn--white center-content" onClick={this.displayNone}>
                        Return to Home
                        </Link>

                    </div>
                </div>
            </div>
        );
    }
}