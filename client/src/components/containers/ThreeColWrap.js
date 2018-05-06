import React from "react";
import mongoDBLogo from "../../images/mongoDB-logo.png";
import nodeJSlogo from "../../images/nodeJS-logo.png";
import expressLogo from "../../images/Expressjs-logo.png";

class ThreeColWrap extends React.Component {
    render() {
        return (
            <div className="full-width-row">
                <div className="row-container">
                    <div>
                        <h2 className="h1-header h1-header--blue">Backend</h2>
                        <p className="para para-md-width">
                            How do you save data, process a request, or send an email? With backend web development. I’ve created solutions to address these issues using the following tools.</p>
                    </div>

                    <div className="three-col-wrap">

                        <div className="three-col-wrap__item">
                            <div className="three-col-wrap__item__inner">
                                <img
                                    className="three-col-wrap__item__inner__img"
                                    src={mongoDBLogo}
                                    alt=""
                                />
                                <h3 className="h3-header text-center">MongoDB</h3>
                            </div>
                        </div>
                        <div className="three-col-wrap__item">
                            <div className="three-col-wrap__item__inner">
                                <img
                                    className="three-col-wrap__item__inner__img"
                                    src={nodeJSlogo}
                                    alt=""
                                />
                                <h3 className="h3-header text-center">NodeJS</h3>
                            </div>
                        </div>
                        <div className="three-col-wrap__item">
                            <div className="three-col-wrap__item__inner">
                                <img
                                    className="three-col-wrap__item__inner__img"
                                    src={expressLogo}
                                    alt=""
                                />
                                <h3 className="h3-header text-center">Express</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThreeColWrap;
