import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask, editTask, deleteTask, toggleTask, setFilter, setKeyword } from './actions/todos'
import PropTypes from 'prop-types'

// selectors
import { getFilteredTodos } from '../../selectors'

// components
import Filter from './components/Filter'
import Keyword from './components/Keyword'
import TodosAdd from './components/TodosAdd'
import TodosList from './components/TodosList'

// style
import './style.css'

const mapStateToProps = state => {
    return {
        filter      : state.todos.search.filter,
        keyword     : state.todos.search.keyword,
        fileredTodos: getFilteredTodos(state),
    }
}

const mapDispatchToProps = dispatch => ({
    addTask         : task        => dispatch(addTask(task)),
    editTask        : (idx, task) => dispatch(editTask(idx, task)),
    deleteTask      : idx         => dispatch(deleteTask(idx)),
    toggleTask      : idx         => dispatch(toggleTask(idx)),
    setFilter       : filter      => dispatch(setFilter(filter)),
    setKeyword      : keyword     => dispatch(setKeyword(keyword)),
})


class TodosContainer extends Component {
    render() {
        const { fileredTodos, addTask, editTask, deleteTask, toggleTask, filter, setFilter, keyword, setKeyword } = this.props
        return (
            <div>
                <h1 className="title">TodosContainer</h1>
                <TodosAdd 
                    addTask={addTask}
                />
                <Filter 
                    filter={filter}
                    setFilter={setFilter}
                />
                <Keyword
                    setKeyword={setKeyword}
                />
                <TodosList
                    todos={fileredTodos}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                />
            </div>
        )
    }
}

TodosContainer.propTypes = {
    fileredTodos: PropTypes.array,
    addTask: PropTypes.func,
    editTask: PropTypes.func,
    deleteTask: PropTypes.func,
    toggleTask: PropTypes.func,
    filter: PropTypes.string,
    setFilter: PropTypes.func,
    keyword: PropTypes.string,
    setKeyword: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)