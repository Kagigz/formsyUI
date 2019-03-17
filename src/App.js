import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/general/navbar'
import HintBox from './components/general/hintbox'
import ProjectCreate from './components/project/projectCreate'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HintBox page="edit"/>
        <div className="container-fluid">
              
              <ProjectCreate title="View/Edit Project"/>
        </div>
      </div>
    );
  }
}

export default App;
