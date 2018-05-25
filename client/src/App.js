import React, { Component } from 'react';
import ScrollToTop from './ScrollToTop';
import Nav from './components/navigation/Nav';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import WorkHistory from './components/pages/WorkHistory';
import Projects from './components/pages/Projects';
import YouTube from './components/pages/YouTube';
import ErrorPage from './components/pages/ErrorPage';
import Contact from './components/pages/Contact';
import Footer from './components/navigation/Footer';
import './app.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';




class App extends Component {

  render() {
    return (
      <div className="App">      
        <Router>
        <ScrollToTop>
        <Route render={({ location }) => (
          <div>
            <Nav />
            <TransitionGroup>
              <CSSTransition 
                key={location.key}
                timeout={700}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/skills' component={Skills} />
                  <Route exact path='/work-history' component={WorkHistory} />
                  <Route exact path='/projects' component={Projects} />
                  <Route exact path='/youtube' component={YouTube} />
                  <Route exact path='/contact' component={Contact} />
                  <Route component={ErrorPage} />
                  </Switch>
                  </CSSTransition>
                  </TransitionGroup>
                  <Footer />
          </div>
        )} />
        </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
