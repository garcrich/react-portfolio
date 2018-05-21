import React from 'react';
import Hero from '../containers/Hero';
import CallToAction from '../containers/CallToAction';
import FourColWrap from '../containers/FourColWrap';
import ThreeColWrap from '../containers/ThreeColWrap';

import axios from 'axios';

export default class Skills extends React.Component {
    state = {
        frontEnd : {},
        backEnd: {},
        marketing : {},
        contentCreation : {},
    }

    componentWillMount() {
        let that = this;
        axios.get(`/skills-data`)
        .then(function(response) {
            const frontEnd = response.data.frontEnd,
                backEnd = response.data.backEnd,
                marketing = response.data.marketing,
                contentCreation = response.data.contentCreation;
                that.setState({
                    frontEnd,
                    backEnd,
                    marketing,
                    contentCreation
                })
            
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <Hero
                    header="How I Get Things Online"
                    subHeader="Skills to get your idea off the ground"
                    bg="skills-hero-bg"
                />
                <FourColWrap 
                    header={this.state.frontEnd.header}
                    para={this.state.frontEnd.para}
                    skills={this.state.frontEnd.skills}
                />

                <ThreeColWrap
                    header={this.state.backEnd.header}
                    para={this.state.backEnd.para}
                    skills={this.state.backEnd.skills}
                />
                <FourColWrap
                    header={this.state.marketing.header}
                    para={this.state.marketing.para}
                    skills={this.state.marketing.skills}
                />
                <ThreeColWrap
                    header={this.state.contentCreation.header}
                    para={this.state.contentCreation.para}
                    skills={this.state.contentCreation.skills}
                />
                <CallToAction
                    ctaHeader="Need My Expertise?"
                    ctaPara="I'm ready to dig deep into my arsenal of skills, techniques to help you achieve your goals. Send me a line to get the ball rolling."
                    ctaBtnText="Reach Out"
                />
            </div>
        );
    }
}