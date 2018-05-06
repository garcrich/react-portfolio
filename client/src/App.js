import React, { Component } from 'react';
import Nav from './components/navigation/Nav';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import ErrorPage from './components/pages/ErrorPage';
import WorkHistory from './components/pages/WorkHistory';
import Projects from './components/pages/Projects';
import YouTube from './components/pages/YouTube';
import Footer from './components/navigation/Footer';
import './app.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <YouTube/>
        {/*<Projects/> */}
        {/*<WorkHistory/>*/}
        {/*<Skills/> */}
        {/* <Home/> */}
        {/*<ErrorPage/>*/}
        <Footer/>
      </div>
    );
  }
}

export default App;
