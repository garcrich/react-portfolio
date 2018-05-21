import React from 'react'
import Hero from '../containers/Hero'
import TwoCol from '../containers/TwoCol'
import CallToAction from '../containers/CallToAction'

import axios from 'axios';

export default class WorkHistory extends React.Component {

    state ={
        TwoColdata: []
    }

    componentWillMount() {
        let that = this;
        axios.get(`/work-hist-two-col-data`)
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
                    header="Work History"
                    subHeader="Learn about my professional background"
                    bg="work-hist-bg"
                />
                {this.state.TwoColdata.map((data, i) => {
                    return (
                        <TwoCol
                            key={i}
                            header={data.header}
                            para={data.para}
                            listTitle={`Accomplishments:`}
                            list={data.list}
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
                    ctaHeader="What Can I BuildFor You?"
                    ctaPara="Need a new website? How about sprucing up your current site? Need to get the word out on your amazing product? I can help you out."
                    ctaBtnText="Chat With Me"
                />
            </div>
        );
    }
}