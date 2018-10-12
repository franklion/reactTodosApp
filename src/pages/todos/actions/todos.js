import * as types from '../../../constants/ActionTypes'

export function addTask(task) {
    return {
        type: types.ADD_TASK,
        task
    }
}

export function editTask(idx, task) {
    return {
        type: types.EDIT_TASK,
        idx,
        task
    }
}

export function deleteTask(idx){
    return {
        type: types.DELETE_TASK,
        idx
    }
}

export function toggleTask(idx) {
    return {
        type: types.TOGGLE_TASK,
        idx
    }
}

export function filter(filter) {
    return {
        type: types.SET_FILTER,
        filter
    }
}
