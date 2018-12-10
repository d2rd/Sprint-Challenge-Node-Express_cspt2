import React, { Component } from 'react';
import './App.css';
import logo from './D2rdroid2.png';
import { connect } from 'react-redux';
import { deleteProject, updateSingleProject } from '../actions';
import UpdateProjectForm from './UpdateProjectForm';
// import SelectedProject from './SelectedProject';
// import { showSelectedProject } from '../actions';
// import { toggleShowUpdate } from '../actions';

class Projects extends Component {
  handleDeleteProject = () => {
    const { id } = this.props.projectSelected;
    this.props.deleteProject(id);
  };

  handleShowProject = project => {
    this.props.showSelectedProject(project);
  };


  // toggleShowUpdate = () => {
  //   this.props.toggleShowUpdate();
  // };

  render() {
    return (
      <div className="Project-Container">
        <div className="View-header">
          <h1>Your Projects</h1>
        </div>
        <div className="PanelContainer">
          <div className="Nav-panel">
            <div>
              <button className="btn-NavButton" onClick={() => this.props.getProjects}>View Your Projects</button>
            </div>
            <div>
              <button className="btn-NavButton">Search Projects</button>
            </div>
            <div>
              <button className="btn-NavButton">+ Create New Project</button>
            </div>
          </div>
          <div className="Projects-panel">
              <ul className="Project-row">
                {!this.props.projectSelected.id &&  this.props.projects.map(project => {
                  return (
                    <div className="Project-header" onClick={() => this.props.showSelectedProject(project)} key={project.id}>
                      <h4>{project.title}</h4>
                    <div className="Project-summary">
                      {project.body.slice(0,200)+"..."}
                    </div>  
                    {/* make function to create summary on rendering projects list */}
                </div>  // shows project contents on click
                  );
                })}
              </ul>
          </div>
        </div>
        {this.props.showUpdate ? (
          <UpdateProjectForm project={this.props.projectSelected} />
        ) : null}
        {/* {Object.keys(this.props.projectSelected).length > 0 ? (
          <SelectedProject
            handleShowProject={this.handleShowProject}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteProject={this.handleDeleteProject}
            selected={this.props.projectSelected}
          />
        ) : null} */}

        {this.props.deletingProject ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingProject: state.projectsReducer.deletingProject,
    error: state.projectsReducer.error,
    showUpdate: state.singleProjectReducer.showUpdate,
    projectSelected: state.singleProjectReducer.projectSelected
  };
};

export default connect(mapStateToProps, {
  deleteProject,
  updateSingleProject,
  // toggleShowUpdate,
  // showSelectedProject
})(Projects);
