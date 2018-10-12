import * as types from '../constants/ActionTypes'

export default function users(state = {
    users: [],
}, action) {
    switch (action.type) {
        case types.LOAD_USERS:
            return Object.assign({}, state, { users: action.users })
        default:
            return state
    }
}