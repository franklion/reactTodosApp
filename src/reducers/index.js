import { combineReducers } from 'redux'

import todos from './todos'
import counter from './counter'
import bmi from './bmi'
import users from './users'
// import filter from './filter'
// import keyword from './keyword'

const todoApp = combineReducers({
    todos,
    counter,
    bmi,
    users,
    // filter,
    // keyword
})

export default todoApp