import React, {Component} from 'react';
import Hero from '../containers/Hero';
import PrimaryFourCol from '../containers/PrimaryFourCol';
import CallToAction from '../containers/CallToAction';
import axios from 'axios';

import keys from '../../keys';



const API_KEY = process.env.youTubeKey || keys.YoutubeAPI;
console.log(API_KEY);
const ChannelID ='UCul78U9NKBYHyqnhQfqUXmg';
const results = 12;

const YTsearchURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${ChannelID}&part=snippet&maxResults=${results}`;

class YouTube extends React.Component {
    state = {
        youtubeList : []
    }
    componentWillMount() {
        let that = this;
        axios.get(YTsearchURL)
        .then(function(response) {
            const youtubeList = response.data.items.map(element => "https://www.youtube.com/embed/" + element.id.videoId);
            that.setState({youtubeList});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Hero/> 
                <div className="full-width-row">
                    <div className="row-container YouTube-container">
                    {
                        this.state.youtubeList.map((link, i) => {
                            return <iframe key={`video-${i}`} className="YouTube-container__iframe" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        })
                    }
                    </div>
                </div>
                <CallToAction/>
            </div>
        );
    }
}

export default YouTube;