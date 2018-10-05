import * as types from '../constants/ActionTypes';

export default function counter(state = {
    counter: 0,
}, action) {
    switch (action.type) {
        case types.INCREASE_COUNTER:
            return Object.assign({}, state, { counter: state.counter + 1})
        case types.DECREASE_COUNTER:
            return Object.assign({}, state, { counter: state.counter - 1})
        case types.RESET_COUNTER:
            return Object.assign({}, state, { counter: 0 })
        default:
            return state;
    }
}

