import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../actions';
import { createProject } from '../actions';
import { updateSingleProject } from '../actions';
import { deleteProject } from '../actions';
class ProjectForm extends Component {
  state = {
    id: 0, // number, no need to provide it when creating projects, the database will generate it.
    name: '', //  string, up to 128 characters long, required.
    description: '', // string, no size limit, required.
    completed: false // t/f
  };
  
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postProject(this.state)
  }

  handleAddProject = _ => {
    const { name, completed, description, tags } = this.state;
    this.props.createProject({ name, completed,  description, tags });
    this.setState({ name: '', completed: '',  description: '', tags: '' });
  };

  render() {
    return (
      <form className="column-Layout" onSubmit={this.handleSubmit}>
        <input
          className="Input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="Input-completed"
          value={this.state.completed}
          name="completed"
          type="text"
          placeholder="Completed"
          onChange={this.handleInputChange}
        />
        <input
          className="Input"
          name="description"
          type="text"
          placeholder="Description"
          onChange={this.handleInputChange}
          value={this.state.description}
        />
        
        <input
          className="Input"
          value={this.state.tags}
          name="tags"
          type="text"
          placeholder="Tags"
          onChange={this.handleInputChange}
        />
        <button className="btn-Input-save" onClick={() => this.handleAddProject()} type="button">
          Save New Project
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingProject: state.creatingProject
  };
};

export default connect(mapStateToProps, { getProjects }, { createProject }, { updateSingleProject }, { deleteProject })(ProjectForm);
