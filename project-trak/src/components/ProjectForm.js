import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../actions';

class ProjectForm extends Component {
  state = {
    id: number, // number, no need to provide it when creating projects, the database will generate it.
    name: '', //  string, up to 128 characters long, required.
    description: '', // string, no size limit, required.
    completed: boolean // yes/no
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
          placeholder="Title"
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
          value={this.state.body}
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

export default connect(mapStateToProps, { createProject })(ProjectForm);
