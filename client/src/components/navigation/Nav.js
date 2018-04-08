import React, { Component } from 'react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

class Nav extends Component {

    state = {
        mobileToggle: false
    }
    
    handleClick = () => {
        this.setState(prevState => ({
            mobileToggle: !prevState.mobileToggle
        }))
    }


    render() {
      return (
        <div>
          <DesktopNav toggleBtn={this.handleClick}/>
          <MobileNav toggleBtn={this.handleClick} mobileToggle={this.state.mobileToggle}/>
        </div>
      );
    }
  }


export default Nav;