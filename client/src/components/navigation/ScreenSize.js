import React, { Component } from 'react';
import windowSize from 'react-window-size';
 
class ScreenSize extends Component {
 
  render() {
    return (
        <div>
        {this.props.windowWidth}
        </div>
    );
  }
 
}
 
export default windowSize(ScreenSize);