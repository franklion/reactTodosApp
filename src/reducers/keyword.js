import * as types from '../constants/ActionTypes'

export default function keyword(state = '', action) {
    switch (action.type) {
        case types.SET_KEYWORD:
            return action.keyword
        default:
            return state
    }
}