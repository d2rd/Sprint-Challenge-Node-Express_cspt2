import React, { Component } from 'react';
import logo from './D2rdroid2.png';
import './App.css';

// App-specific code
import Projects from './Projects';
import ProjectForm from './ProjectForm';
import { getProjects } from '../actions';
import { createProject } from '../actions';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-Title">{`Proximo Projects`}</h1>
          <ProjectForm />
        </header>
        {this.props.error ? <h3>Error Fetching Projects</h3> : null}
        <div className="Flex-Container">
          {this.props.gettingProjects ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Projects projects={this.props.projects} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
