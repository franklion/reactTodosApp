import { combineReducers } from 'redux'

import filter from './filters'
import todos from './todos'
import counter from './counter'

const todoApp = combineReducers({
    filter,
    todos,
    counter,
})

export default todoApp;