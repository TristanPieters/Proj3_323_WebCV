import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';

import Footer from "./components/Footer.js"
import HomePage from "./pages/HomePage.js"
import AboutPage from "./pages/AboutPage.js"
import ContactPage from "./pages/ContactPage.js"



library.add(fab)

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Tristan Pieters",
      headerLinks: [
        {title: 'Home', path: "/"},
        {title: 'About', path: "/about"},
        {title: 'Contact', path: "/contact"}
      ],
      home: {
        title: 'Tristan Pieters',
        subTitle: 'Software Developer',
        homeText: 'B.Sc. in Information Technology',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      },
      hits: 0,
      loading: true,
      tweetid: "462209959736795136",
    }
  }

  render() {
    return (
     <Router>
       <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="white" expand="lg">
            <Navbar.Brand>{this.state.title}</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>     
            </Navbar.Collapse>
          </Navbar>
          



          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} homeText={this.state.home.homeText} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} tweetId={this.state.tweetid}/> } />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer loading={this.state.loading} hits={this.state.hits} />

       </Container>
      </Router>
    );
  }
}

export default App;
