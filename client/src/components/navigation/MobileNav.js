import React, { Component } from "react";

class MobileNav extends Component {
  
  render() {      
          var overlayState;
          var mobileSlideout;
      
        if (this.props.mobileToggle === true &&           this.props.mobileView === true) {
          overlayState =  "overlay--active";
          mobileSlideout = "mobile-nav--slide-out"

        } else {
          overlayState = "overlay--hidden";
          mobileSlideout = "";
        }

      console.log(this.props.mobileView)
      return (
        <div>
        <div className={`overlay ${overlayState}`}></div>
        <div className={`mobile-nav ${mobileSlideout}`}>
        <ul className="mobile-nav__list">
        <span className="mobile-nav__list__item mobile-nav__list__item__close-icon">
              <span className="mobile-nav__list__item__close-icon--close" onClick={this.props.toggleBtn}>
              <i className="far fa-times-circle"></i>
              </span>
            </span>

            <a className="mobile-nav__list__item" href="">
              <li>Skills</li>
            </a>
            <a className="mobile-nav__list__item" href="">
              <li>Work History</li>
            </a>
            <a className="mobile-nav__list__item" href="">
              <li>Projects</li>
            </a>
            <a className="mobile-nav__list__item" href="">
              <li>YouTube</li>
            </a>
            <a className="mobile-nav__list__item" href="">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    )
  }
}

export default MobileNav;
