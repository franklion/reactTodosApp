import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, editTask, deleteTask, toggleTask } from './actions/todos';
import PropTypes from 'prop-types';

// components
import FilterContainer from './FilterContainer'
import TodosAdd from './components/TodosAdd'
import TodosList from './components/TodosList'

// style
import './style.css';

const mapStateToProps = state => {
    return {
        todos: state.todos,
        filter: state.filter
    };
};

const mapDispatchToProps = dispatch => ({
    addTask         : task        => dispatch(addTask(task)),
    editTask        : (idx, task) => dispatch(editTask(idx, task)),
    deleteTask      : idx         => dispatch(deleteTask(idx)),
    toggleTask      : idx         => dispatch(toggleTask(idx)),
});


class TodosContainer extends Component {
    render() {
        const { todos, editTask, addTask, deleteTask, toggleTask, filter } = this.props;
        return (
            <div>
                <h1>TodosContainer</h1>
                <TodosAdd 
                    addTask={addTask}
                />
                <FilterContainer />
                <TodosList 
                    todos={todos}
                    filter={filter}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                />
            </div>
        );
    }
}

TodosContainer.propTypes = {
    todos: PropTypes.array,
    filter: PropTypes.string,
    addTask: PropTypes.func,
    editTask: PropTypes.func,
    deleteTask: PropTypes.func,
    toggleTask: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);