import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 


import Navbar from "./components/Navbar";
import Landingpage from "./components/LandingPage";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Default from "./components/Default";

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
    </React.Fragment>
    );
  }
}

export default App;
