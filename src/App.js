import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-6"> column number 1</div>
          <div className="col-6"> 
            <span>
              <i className="fas fa-home"/>
            </span>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
