import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/general/navbar'
import ProjectCreate from './components/project/projectCreate'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2" id="navbar">
            <Navbar/>
          </div>
          <div className="col-10">
            <ProjectCreate title="Edit Project"/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
