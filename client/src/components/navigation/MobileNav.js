import React, { Component } from "react";

class MobileNav extends Component {
  render() {
    const overLayState = this.props.mobileToggle ? (
      "overlay--active") : (
        "overlay--hidden"
      )

    return (
      <div>
        
        <div className={`overlay ${overLayState}`}></div>
        <div className={`mobile-nav ${this.props.mobileToggle ? "mobile-nav--slide-out" : ""}`}>
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
