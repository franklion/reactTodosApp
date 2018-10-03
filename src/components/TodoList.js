import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {
        super(props);
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
        const { todos, saveTask, deleteTask } = this.props;

        let list = [];
        todos.forEach((todo, idx) => {
            list.push(<TodoItem 
                        key={idx} 
                        idx={idx} 
                        todo={todo} 
                        saveTask={saveTask} 
                        deleteTask={deleteTask}
                        />)
        });
        return list;
    }
}

TodoList.propTypes = {
    todos: PropTypes.array,
    saveTask: PropTypes.func,
    deleteTask: PropTypes.func,
}

export default TodoList;
