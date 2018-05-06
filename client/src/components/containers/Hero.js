import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-bg">
        <div className="hero row-container">
          <div className="hero__content">
            <h1 className="hero__content__h1">Ricky Garcia</h1>
            <h2 className="hero__content__h2">
              Helping you get your <br /> message online.
            </h2>
            <a>
              <button className="hero__content__button">Get in touch</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
