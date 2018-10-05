import { combineReducers } from 'redux'

import filter from './filters'
import todos from './todos'
import counter from './counter'
import bmi from './bmi'

const todoApp = combineReducers({
    filter,
    todos,
    counter,
    bmi,
})

export default todoApp;