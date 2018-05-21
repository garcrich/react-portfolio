import React from 'react';
import { Link } from 'react-router-dom';

class PrimaryFourCol extends React.Component {

    render() {
        return (
            <div className="full-width-row home-primary-bg">
                <div className="row-container">
                    <h1 className="h1-header text-center lrg-btm-sp">My Skillset</h1>
                    <div className="four-col-primary__container">
                        <div className="four-col-primary__container__item">
                            <i className="far fa-file-code four-col-primary__container__item__icon" ></i>
                            <h3 className="four-col-primary__container__item__header">FrontEnd Development</h3>
                            <p className="four-col-primary__container__item__para">Making things look good online is my specialty</p>
                        </div>

                        <div className="four-col-primary__container__item">
                            <i className="far fa-file-video four-col-primary__container__item__icon"></i>
                            <h3 className="four-col-primary__container__item__header">Content Creation</h3>
                            <p className="four-col-primary__container__item__para">I’ve made everything from blogs to videos</p>
                        </div>

                        <div className="four-col-primary__container__item">
                            <i className="fab fa-node-js four-col-primary__container__item__icon"></i>
                            <h3 className="four-col-primary__container__item__header">Backend Development</h3>
                            <p className="four-col-primary__container__item__para">Powering applications with server-side logic</p>
                        </div>

                        <div className="four-col-primary__container__item">
                            <i className="fas fa-chart-bar four-col-primary__container__item__icon"></i>
                            <h3 className="four-col-primary__container__item__header">Digital Marketing</h3>
                            <p className="four-col-primary__container__item__para">Social Media, YouTube, and More</p>
                        </div>
                        
                    </div>
                    <div className="text-center">
                        <Link to="/skills" className="btn btn--blue">My Tool Kit</Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PrimaryFourCol;