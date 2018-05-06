import React from 'react';
import map from "../../images/idaho.jpg";

class TwoCol extends React.Component {
    render() {
        return (
            <div className="full-width-row">
                <div className="row-container two-col-container">
                    <div className="two-col-container__text-container">
                        <h2 className="h1-header h1-header--blue">Where I've Worked</h2>
                        <p className="para">I’ve worked in the online space for years. 
                        Positions I’ve held include eServices specialist, social media manager, and frontend web developer. By joining these experiences together, I’m able to produce a stronger, more cohesive, product.</p>
                        <button className="btn btn--white">View Work History</button>
                    </div>
                    <div className="two-col-container__img-container">
                        <img width="100%" src={map} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TwoCol;