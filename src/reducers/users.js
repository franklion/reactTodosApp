import * as types from '../constants/ActionTypes'

const initialState = {
    users: [],
    isLoading: false,
    loadUsersSuccess: false,
    loadUsersError: false
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_USERS: {
            return Object.assign({}, state, { isLoading: true })
        }
        case types.LOAD_USERS_SUCCESS: {
            return Object.assign({}, state, { isLoading: false, loadUsersSuccess: true, users: action.users })
        }
        case types.LOAD_USERS_ERROR: {
            return Object.assign({}, state, { isLoading: false, loadUsersError: true })
        }
        default:
            return state
    }
}