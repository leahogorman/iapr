import React from "react";
import {HashRouter as Router, Route, Link } from 'react-router-dom';
import'react-bootstrap'
import './App.css';
import { Container, Navbar, Nav } from "react-bootstrap";

import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/About"
import EducationPage from "./pages/Education";
import ScholarshipPage from "./pages/Scholarship";
import Logo from './assets/images/Logo.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Educational Resources', path: '/education'},
        {title: 'Research Scholarships', path: '/scholarship'},
      ],
      home: {
        title: <img className="logoImageHome" src={Logo} alt={Logo} />,
        subTitle: 'Education Committee',
      },
      about: {
        title: "Hi, I'm Leah",
        
      },
      portfolio: {
        title: "My Work",
      },
    }
  }

  render(){
    return [
      <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="" gb="transparent" expand="lg" >
          <Navbar.Brand><Link className="nav-link brand justify-content-start" to="/"><img className="logoImage" src={Logo} alt={Logo} style={{width: '300px'}}/></Link></Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto justify-content-end">
              
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/education">Educational Resources</Link>
              <Link className="nav-link" to="/scholarship">Research Scholarships</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />}/>
        <Route path="/about" exact render={() => <AboutPage />}/>
        <Route path="/education" exact render={() => <EducationPage />}/>
        <Route path="/scholarship" exact render={() => <ScholarshipPage />}/> 
      </Container>
      <Footer />
      </Router>
    ]
  }
}


export default App;
