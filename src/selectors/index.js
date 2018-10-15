import { createSelector } from 'reselect'


const getOriginalTodos = state => state.todos.originalTodos

const getFilter        = state => state.todos.search.filter

const getKeyword       = state => state.todos.search.keyword

export const getFilteredTodos = createSelector(
    [getOriginalTodos, getFilter, getKeyword],
    (getOriginalTodos, getFilter, getKeyword) => {

        return getOriginalTodos.filter(todo => JSON.stringify(todo.task).indexOf(getKeyword) > -1)
                                .filter(todo => { 
                                    if ((getFilter === 'SHOW_ALL') ||
                                        (getFilter === 'SHOW_COMPLETED' && todo.isCompleted) ||
                                        (getFilter === 'SHOW_UNCOMPLETED' && !todo.isCompleted)) {
                                       return true
                                    }
                                })
    }
)