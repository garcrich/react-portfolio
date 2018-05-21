import React from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import PrimaryFourCol from '../containers/PrimaryFourCol';
import CallToAction from '../containers/CallToAction';

import axios from 'axios';


class HomePage extends React.Component {

    state = {
        TwoColdata: []
    }

    componentWillMount() {
        let that = this;
        axios.get(`/index-two-col-data`)
        .then(function(response) {
            that.setState({TwoColdata : response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Hero
                    header="Ricky Garcia"
                    subHeader="Helping you get online."
                    bg="home-hero-bg"
                    secondaryBg="home-hero-bg--secondary"
                    btnPara="Get In Touch"
                />
                <PrimaryFourCol />

                {this.state.TwoColdata.map((data, i) => {
                    return (
                        <TwoCol
                            key={i}
                            header={data.header}
                            para={data.para}
                            img={data.img}
                            altText={data.altText}
                            btnPara={data.btnPara}
                            internalLink={data.internalLink}
                            link={data.link}
                            pullImg={data.pullImg}
                            bg={i % 2 === 0 ? null : 'cta-bg' }
                        />
                    )
                })}
                <CallToAction
                    ctaHeader="Let's Connect"
                    ctaPara="Have a project in mind? Want me to speak at your event? Require consulting on a current development? Let’s talk about it."
                    ctaBtnText="Send Message"
                />
            </div>
        );
    }
}

export default HomePage;