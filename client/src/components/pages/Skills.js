import React from 'react';
import Hero from '../containers/Hero';
import CallToAction from '../containers/CallToAction';
import FourColWrap from '../containers/FourColWrap';
import ThreeColWrap from '../containers/ThreeColWrap';

class Skills extends React.Component {
    render() {
        return (
            <div>
                <Hero/> 
                <FourColWrap/>
                <ThreeColWrap/>
                <FourColWrap/>
                <ThreeColWrap/>
                <CallToAction/>
            </div>
        );
    }
}

export default Skills;