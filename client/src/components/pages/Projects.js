import React from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import CallToAction from '../containers/CallToAction';

import axios from 'axios';

export default class HomePage extends React.Component {
    state = {
        TwoColdata: []
    }

    componentWillMount() {
        let that = this;
        axios.get(`/projects-two-col-data`)
            .then(function (response) {
                that.setState({ TwoColdata: response.data });
                console.log(that.state.TwoColdata[0].para)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <Hero
                    header="Things I've Built"
                    subHeader="Because talk is cheap"
                    bg="projects-bg"
                />
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
                            bg={i % 2 === 0 ? null : 'cta-bg'}
                        />
                    )
                })}
                <CallToAction
                    ctaHeader="Let's Start On Your Project?"
                    ctaPara="I'm ready to dig deep into my arsenal of skills, techniques to help you achieve your goals. Send me a line to get the ball rolling."
                    ctaBtnText="Reach Out"
                />
            </div>
        );
    }
}