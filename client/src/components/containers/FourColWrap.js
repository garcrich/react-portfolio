import React from "react";

class FourColWrap extends React.Component {
  render() {
    return (
      <div className="full-width-row cta-bg">
        <div className="row-container">
          <div>
            <h2 className="h1-header h1-header--blue">{this.props.header}</h2>
            <p className="para para-md-width">
              {this.props.para}
            </p>
          </div>

          <div className="four-col-wrap">
            {
              this.props.skills && this.props.skills.map((skill, i) => {
                return (
                  <div key={i} className="four-col-wrap__item">
                    <div className="four-col-wrap__item__inner">
                      {
                        RegExp('.(gif|jpg|jpeg|tiff|png)$').test(skill.icon) === true ?
                          <img
                            className="four-col-wrap__item__inner__jquery-img"
                            src={skill.icon}
                            alt={`${skill.text}`}
                          />
                          :
                          <i className={`four-col-wrap__item__inner__icon ${skill.icon}`} />
                      }
                      <h3 className="h3-header text-center">{skill.text}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {/* <div className="four-col-wrap">

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
          </div> */}
        </div>
      </div>
    );
  }
}

export default FourColWrap;
