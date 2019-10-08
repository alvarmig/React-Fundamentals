import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../style.css';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <li className="list-group-item checkbox">
                <div className="row">
                    <div className="col-xs-1 checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                onChange={this.props.markComplete.bind(this, id)} 
                            />
                        </label>
                    </div>

                    <div id="taskText" className="col-xs-9 task-text" style={this.getStyle()}>
                        <p >{title}</p>
                    </div>

                    <div className="col-xs-2 delete-icon-area">
                            <button onClick={this.props.deleteTodo.bind(this, id)}>
                                <i className="delete-icon glyphicon glyphicon-trash"></i>
                            </button>
                    </div>
                </div>
            </li>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
