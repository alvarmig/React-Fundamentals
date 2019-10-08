import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style.css';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title:''});
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <div className="row input-area">
        <div className="col-xs-10">
          <input
            type="text"
            name="title"
            placeholder="Add new task ..."
            className="form-control"
            id="taskInput"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div className="col-xs-2">
          <button id="addBtn" className="btn btn-primary" onClick={this.onSubmit}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
