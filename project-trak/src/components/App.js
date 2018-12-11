import React, { Component } from 'react';
import logo from './D2rdroid2.png';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';

// App-specific code
import Projects from './Projects';
import ProjectForm from './ProjectForm';
import { getProjects } from '../actions/index';
import { createProject } from '../actions/index';
import { deleteProject } from '../actions/index';
import { updateSingleProject } from '../actions/index';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


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
        {this.props.error ? <h3>Error fetching projects</h3> : null}

{/* // Navlinks from Javier https://github.com/jalvarez2020/front-end-project-week/blob/master/lambda_notes/src/App.js#L36 */}
        <NavLink exact to='/'>
          <h2> View your notes </h2>
        </NavLink>
        <NavLink to='/create'>
          <h2> + Create new note </h2>
        </NavLink>

        <div className="Flex-Container">


          {this.props.gettingProjects ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Projects projects={this.props.projects} />
          )}
        </div>
        <div>
        <ProjectForm projects={this.props.projects} />
        </div>
        <div>
        {/* <Route path='/create' exact
            render={props => <CreateNewNote />}
            /> */}
        <Route path='/' exact
            render={props => <App />}
            />
        <Route path='/projectForm' exact
            render={props => <ProjectForm />}
            />
        <Route path='/projects' exact
            render={props => <Projects />}
            /> 

        {/* <Route path="/updateProjectForm" component={UpdateProjectForm} /> */}
        </div>
      </div>
    );
  }
}
// 


const mapStateToProps = state => {
  const { projectsReducer } = state;
  return {
    projects: projectsReducer.projects,
    error: projectsReducer.error,
    gettingProjects: projectsReducer.gettingProjects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: project => dispatch(deleteProject.deleteProject(project)),
    getProjects: getProjects 
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps, { getProjects }, { createProject }, { deleteProject }, {updateSingleProject}))(App);
