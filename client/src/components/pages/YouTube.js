import React from 'react';
import Hero from '../containers/Hero';
import CallToAction from '../containers/CallToAction';
import axios from 'axios';



const API_KEY = process.env.youTubeKey || 'AIzaSyC6ftAI3N9JYdmJK4XLfMBGt56JxNeJfHk';
const ChannelID = 'UCul78U9NKBYHyqnhQfqUXmg';
const results = 12;

const YTsearchURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${ChannelID}&part=snippet&maxResults=${results}`;

class YouTube extends React.Component {
    state = {
        youtubeList: []
    }

    componentWillMount() {
        let that = this;
        axios.get(YTsearchURL)
            .then(function (response) {
                const youtubeList = response.data.items.map(element => "https://www.youtube.com/embed/" + element.id.videoId);
                that.setState({ youtubeList });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <Hero
                    header="Sharing My Journey"
                    subHeader="I've learned a lot over the years"
                    bg="youtube-bg"
                />
                <div className="full-width-row">
                    <div className="row-container YouTube-container">
                        {   
                            this.state.youtubeList.map((link, i) => {
                                return <iframe title={`${i}-video`} key={`video-${i}`} className="YouTube-container__iframe" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            })
                        }
                    </div>
                </div>
                <CallToAction
                    ctaHeader="Ready To Market Your Idea?"
                    ctaPara="You've seen what I can do. Now let's see what I can do for you."
                    ctaBtnText="Let's work together"
                />
            </div>
        );
    }
}

export default YouTube;