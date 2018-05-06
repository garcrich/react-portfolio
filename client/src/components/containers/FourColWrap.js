import React from "react";
import jQueryLogo from "../../images/jQuery-logo.png";

class FourColWrap extends React.Component {
  render() {
    return (
      <div className="full-width-row cta-bg">
        <div className="row-container">
          <div>
            <h2 className="h1-header h1-header--blue">Frontend</h2>
            <p className="para para-md-width">
              Getting things on the web is hard. Getting them to look great is
              even harder. A combination of design and technical expertise are
              both required to get the job done right. I’ve honed my skills to
              deliver the best experience, where it be on a desktop computer or
              []pa smartphone. These are my weapons of choice.
            </p>
          </div>

          <div className="four-col-wrap">
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-html5" />
                <h3 className="h3-header text-center">HTML5</h3>
              </div>
            </div>
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-css3-alt" />
                <h3 className="h3-header text-center">CSS</h3>
              </div>
            </div>
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-sass" />
                <h3 className="h3-header text-center">SCSS</h3>
              </div>
            </div>
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-js" />
                <h3 className="h3-header text-center">JavaScript</h3>
              </div>
            </div>
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-react" />
                <h3 className="h3-header text-center">React</h3>
              </div>
            </div>
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <img
                  className="four-col-wrap__item__inner__jquery-img"
                  src={jQueryLogo}
                  alt=""
                />
                <h3 className="h3-header text-center">jQuery</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourColWrap;
