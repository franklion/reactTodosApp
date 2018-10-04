import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this._renderItems = this._renderItems.bind(this);
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this._renderItems() }
                    </tbody>
                </table>
            </div>
        );
    }

    _renderItems() {
        const { filter, todos, saveTask, deleteTask, completeTask } = this.props;

        let list = [];
        todos.forEach((todo, idx) => {
            if (filter === 'SHOW_ALL' ||
                (filter === 'SHOW_COMPLETED' && todo.isCompleted) ||
                (filter === 'SHOW_UNCOMPLETED' && !todo.isCompleted)) {
                list.push(
                    <TodoItem
                        key={idx}
                        idx={idx}
                        todo={todo}
                        saveTask={saveTask}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                    />);
            }
        });
        return list;
    }
}

TodoList.propTypes = {
    todos: PropTypes.array,
    saveTask: PropTypes.func,
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
}

export default TodoList;
