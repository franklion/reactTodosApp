import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class TodosItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
        }
    }
    
    render() {
        const { todo, idx } = this.props
        const todoClass = classNames({
            'todos-item-text': true,
            'todos-item-completed': todo.isCompleted
        })

        if (this.state.isEdit) {
            return (
                <div className="todos-item">
                    <input className="todos-item-text" data-idx={idx} defaultValue={todo.task} ref="editInput" />
                    <button onClick={ () => this.handleSave() }>save</button>
                    <button onClick={ () => this.handleCancel() }>cancel</button>
                </div>
            )
        }

        return (
            <div className="todos-item">
                <li className={todoClass} onClick={ () => this.handleToggle(idx) }>{todo.task}</li>
                <button onClick={ () => this.handleEdit() }>edit</button>
                <button onClick={ () => this.handleDelete(idx) }>delete</button>
            </div>
        )
    }

    handleEdit() {
        this.setState({ isEdit: true })
    }

    handleCancel() {
        this.setState({ isEdit: false })
    }

    handleSave() {
        const editInput = this.refs.editInput
        const todoValue = editInput.value.trim()
        const todoIdx   = editInput.getAttribute('data-idx')

        this.setState({ isEdit: false })

        if (todoValue !== this.props.todo.task) {
            this.props.editTask(todoIdx, todoValue)
        }
    }

    handleDelete(idx) {
        this.props.deleteTask(idx)
    }

    handleToggle(idx) {
        this.props.toggleTask(idx)
    }
}

TodosItem.propTypes = {
    idx: PropTypes.string,
    todos: PropTypes.object,
    editTask: PropTypes.func,
    deleteTask: PropTypes.func,
    toggleTask: PropTypes.func,
}

export default TodosItem