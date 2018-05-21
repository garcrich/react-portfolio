import React from 'react';
import { Link } from 'react-router-dom';

class Hero extends React.Component {
  render() {
    return (
      <div className={this.props.bg}>
        <div className={`hero row-container ${this.props.secondaryBg}`}>
          <div className="hero__content">
            <h1 className="hero__content__h1">{this.props.header}</h1>
            <h2 className="hero__content__h2">
              {this.props.subHeader}
            </h2>
              {this.props.btnPara &&
                <Link to={`/contact`} className="hero__content__button">{this.props.btnPara}</Link>
              }
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
