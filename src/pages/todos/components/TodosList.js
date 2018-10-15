import React, { Component } from 'react'
import PropTypes from 'prop-types'

// components
import TodosItem from './TodosItem'

class TodosList extends Component {
    render() {
        const { todos, editTask, deleteTask, toggleTask } = this.props
        return (
            <div>
                <ul>
                    {
                        todos.map(todo => {      
                            return <TodosItem
                                        key={todo.id}
                                        idx={todo.id}
                                        todo={todo}
                                        editTask={editTask}
                                        deleteTask={deleteTask}
                                        toggleTask={toggleTask}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}

TodosList.propTypes = {
    todos: PropTypes.array,
    editTask: PropTypes.func,
    deleteTask: PropTypes.func,
    toggleTask: PropTypes.func,
}

export default TodosList