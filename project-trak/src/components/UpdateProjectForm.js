import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSingleProject } from '../actions';

class UpdateProjectForm extends Component { 
  state = {
    title: '',
    // summary: '',
    body: '',
    // category: '', // future '{business, personal}
    priority: '',  // importance 1-5
    urlAddress: `` 
  };

  handleInputChange = event => {
    console.log(event)
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleAddProject = event => {
    event.preventDefault(); // prevents refreshing on button click
    const { title, priority, body, urlAddress } = this.state;
    this.props.updateSingleProject({ title, priority, body, urlAddress }, this.props.project.id);
    this.setState({ title: '', priority: '', body: '', urlAddress: `` });
  };

  render() {
    return (
      <form onSubmit={this.handleAddProject}>
        <input 
        className='Input' 
        value={this.state.title} 
        name='title' 
        type="text"
        placeholder={this.props.project.title} 
        onChange={this.handleInputChange} 
        />
        {/* <input name='summary' placeholder={this.props.project.summary} onChange= { this.handleInputChange } value={this.state.summary } /> */}
        
        <input 
        className="Input-priority" 
        name='priority' 
        placeholder={this.props.project.priority} 
        onChange= { this.handleInputChange} 
        value={this.state.priority}
        />
        
        <input 
        className='Input'
        name='body' 
        type="text"
        placeholder={this.props.project.body} 
        onChange= {this.handleInputChange} 
        value={this.state.body}
        />
        
        <input
          className="Input"
          name="urlAddress"
          type="text"
          placeholder={this.props.project.urlAddress}
          onChange={this.handleInputChange}
          value={this.state.urlAddress}
        />

        <button className="btn-Input-save" type='submit'>Save Changes</button>
      </form>
    );
  };
}

export default connect(null, { updateSingleProject })(UpdateProjectForm);
