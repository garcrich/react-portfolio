import React, { Component } from 'react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

class Nav extends Component {

    state = {
        mobileToggle: false,
        mobileView: true
    }

    updateDimensions = () => {
      if(window.innerWidth > 500) {
        this.setState({mobileView: false })
      } else {
        this.setState({mobileView: true})
      }
    }
    
    handleClick = () => {
        this.setState(prevState => ({
            mobileToggle: !prevState.mobileToggle
        }))
    }

    componentDidMount() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions)
    }


    render() {
      return (
        <div>
          <DesktopNav toggleBtn={this.handleClick}/>
          <MobileNav toggleBtn={this.handleClick}
                     mobileToggle={this.state.mobileToggle} 
                     mobileView={this.state.mobileView}/>
        </div>
      );
    }
  }


export default Nav;