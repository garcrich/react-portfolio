import React from 'react'
import Hero from '../containers/Hero'
import TwoCol from '../containers/TwoCol'
import PrimaryFourCol from '../containers/PrimaryFourCol'
import CallToAction from '../containers/CallToAction'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Hero/> 
                <PrimaryFourCol/>
                <TwoCol/>
                <TwoCol/>
                <TwoCol/>
                <CallToAction/>
            </div>
        );
    }
}

export default HomePage;