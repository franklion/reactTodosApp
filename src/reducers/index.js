import { combineReducers } from 'redux'

import todos from './todos'
import counter from './counter'
import bmi from './bmi'
import users from './users'
import filter from './filter'

const todoApp = combineReducers({
    todos,
    counter,
    bmi,
    users,
    filter,
})

export default todoApp;