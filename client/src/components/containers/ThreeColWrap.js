import React from "react";

class ThreeColWrap extends React.Component {
    render() {
        return (
            <div className="full-width-row">
                <div className="row-container">
                    <div>
                        <h2 className="h1-header h1-header--blue">{this.props.header}</h2>
                        <p className="para para-md-width">{this.props.para}</p>
                    </div>

                    <div className="three-col-wrap">

                        {
                            this.props.skills && this.props.skills.map((skill, i) => {
                                return (
                                    <div key={i} className="three-col-wrap__item">
                                        <div className="three-col-wrap__item__inner">
                                        {
                                            RegExp('.(gif|jpg|jpeg|tiff|png)$').test(skill.icon) === true ?
                                            <img
                                                className="three-col-wrap__item__inner__img"
                                                src={skill.icon}
                                                alt={`${skill.text}`}
                                            /> : 
                                            <i 
                                                className={`three-col-wrap__item__inner__icon ${skill.icon}`} 
                                            />
                                        }
                                        <h3 className="h3-header text-center">{skill.text}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* <div>
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
                    </div> */}
                </div>
            </div>
        );
    }
}

export default ThreeColWrap;
