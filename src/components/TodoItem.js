import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this._onSaveClick = this._onSaveClick.bind(this);
        this._onCancelClick = this._onCancelClick.bind(this);
        this._onEditClick = this._onEditClick.bind(this);
    }


    render() {
        const { todo, idx, deleteTask, completeTask } = this.props;
        const taskStyle = {
            color: todo.isCompleted ? '#888' : '#000',
            textDecoration: todo.isCompleted ? 'line-through' : '',
        };

        if(this.state.isEditing) {
            return (
                <tr>
                    <td>
                        <input type="text" data-idx={ idx } defaultValue={ todo.task } ref="editInput" />
                    </td>
                    <td>
                        <button onClick={this._onSaveClick}>Save</button>
                        <button onClick={this._onCancelClick}>Cancel</button>
                        
                    </td>
                </tr>
            )
        }

        return (
            <tr>
                <td>
                    <span style={taskStyle} onClick={() => completeTask(idx)}>
                        {todo.task}
                    </span>
                </td>
                <td>
                    <button onClick={this._onEditClick}>Edit</button>
                    <button onClick={() => deleteTask(idx)}>Delete</button>
                </td>
            </tr>
        )
       
    }

    _onSaveClick() {
        const input = this.refs.editInput;
        this.props.saveTask(+input.getAttribute('data-idx'), input.value);
        this.setState({ isEditing: false });
    }

    _onEditClick() {
        this.setState({ isEditing: true })
    }

    _onCancelClick() {
        this.setState({ isEditing: false })
    }
}

TodoItem.propTypes = {
    idx: PropTypes.number,
    todo: PropTypes.object,
    saveTask: PropTypes.func,
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
}

export default TodoItem;
