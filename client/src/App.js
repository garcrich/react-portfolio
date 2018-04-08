import React, { Component } from 'react'
import Nav from './components/navigation/Nav'
import Home from './components/pages/Home'
import ErrorPage from './components/pages/ErrorPage'
import Footer from './components/navigation/Footer'
import './app.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Home/>
        <ErrorPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
