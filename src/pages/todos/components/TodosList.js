import React, { Component } from 'react'
import PropTypes from 'prop-types'

// components
import TodosItem from './TodosItem'

class TodosList extends Component {
    render() {
        const { todos, editTask, deleteTask, toggleTask, filter, keyword } = this.props
        return (
            <div>
                <ul>
                    { todos.filter(todo => JSON.stringify(todo.task).indexOf(keyword) > -1)
                            .map(todo => {
                                if (filter === 'SHOW_ALL' ||
                                   (filter === 'SHOW_COMPLETED' && todo.isCompleted) ||
                                   (filter === 'SHOW_UNCOMPLETED' && !todo.isCompleted)) 
                                {
                                    return <TodosItem
                                                key={todo.id}
                                                idx={todo.id}
                                                todo={todo}
                                                editTask={editTask}
                                                deleteTask={deleteTask}
                                                toggleTask={toggleTask}
                                    />
                                }
                            })}
                </ul>
            </div>
        )
    }
}

TodosList.propTypes = {
    todos: PropTypes.array,
    filter: PropTypes.string,
    editTask: PropTypes.func,
    deleteTask: PropTypes.func,
    toggleTask: PropTypes.func,
}

export default TodosList