import React from 'react';
import Hero from '../containers/Hero'

export default class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <Hero/> 
                
                <h1 className="h1-header h1-header--blue">Whoops!</h1>
                <p className="para">The path &quot;{this.props.location.pathname}&quot; doesn't exist!</p>
            </div>
        );
    }
}