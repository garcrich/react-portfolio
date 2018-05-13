import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";


class DesktopNav extends Component {

  render() {
    return (
    <nav className="nav ">
      <ul className="nav__list">
        <div className="row-container">
          <span className="nav__list__section">

          <span className="nav__list__section__mobile-icon" onClick={this.props.toggleBtn}>
              <i className="fas fa-bars"></i>
          </span>
            
          <NavLink className="nav__list__section__item" to='/'>      
          <li className="nav__list__section__item__img-container">
          <img className="nav__list__section__item__img-container__img" src={logo} alt=""/>
          </li>
          </NavLink>
          
          <NavLink className="nav__list__section" to='/skills' activeClassName="desktop-nav-active">
            <li className="nav__list__section__text">Skills</li>
          </NavLink>

            <NavLink className="nav__list__section" to="/work-history" activeClassName="desktop-nav-active">
              <li className="nav__list__section__text">Work History</li>
            </NavLink>
            <NavLink className="nav__list__section" to="/projects" activeClassName="desktop-nav-active">
              <li className="nav__list__section__text">Projects</li>
            </NavLink>
            <NavLink className="nav__list__section" to="/youtube" activeClassName="desktop-nav-active">
              <li className="nav__list__section__text">YouTube</li>
            </NavLink>
            <NavLink className="nav__list__section nav__list__section--cta" to="/contact" activeClassName="desktop-nav-active">
              <li className="nav__list__section__text">Contact</li>
            </NavLink>
          </span>
        </div>
      </ul>
    </nav>
  )};
}

export default DesktopNav;
