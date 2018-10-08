import { combineReducers } from 'redux'

import filter from './filters'
import todos from './todos'
import counter from './counter'
import bmi from './bmi'
import users from './users'

const todoApp = combineReducers({
    filter,
    todos,
    counter,
    bmi,
    users,
})

export default todoApp;