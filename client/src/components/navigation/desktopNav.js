import React, { Component } from "react";
import logo from "../../images/logo.png";


class DesktopNav extends Component {

  render() {
    return (
    <nav className="nav">
      <ul className="nav__list">
        <div className="content-wrapper">
          <span className="nav__list__section">

          <span className="nav__list__section__mobile-icon" onClick={this.props.toggleBtn}>
              <i className="fas fa-bars"></i>
          </span>
            
          <a className="nav__list__section__item" href="">
          
      
          <li className="nav__list__section__item__img-container">
          <img className="nav__list__section__item__img-container__img" src={logo} alt=""/>
          </li>
          </a>
          <a className="nav__list__section" href="">
              <li className="nav__list__section__text">Skills</li>
            </a>
            <a className="nav__list__section" href="">
              <li className="nav__list__section__text">Work History</li>
            </a>
            <a className="nav__list__section" href="">
              <li className="nav__list__section__text">Projects</li>
            </a>
            <a className="nav__list__section" href="">
              <li className="nav__list__section__text">YouTube</li>
            </a>
            <a className="nav__list__section nav__list__section--cta" href="">
              <li className="nav__list__section__text">Contact</li>
            </a>
          </span>
        </div>
      </ul>
    </nav>
  )};
}

export default DesktopNav;
