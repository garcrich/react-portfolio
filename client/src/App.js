import React, { Component } from 'react'
import DesktopNav from './components/navigation/desktopNav'
import MobileNav from './components/navigation/MobileNav'
import ErrorPage from './components/pages/ErrorPage'
import ContactForm from './components/ContactForm'
import ContactCTA from './components/ContactCTA'
import Footer from './components/navigation/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <DesktopNav/>
        <MobileNav/>
        <ContactForm/>
        <ContactCTA/>
        <ErrorPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
