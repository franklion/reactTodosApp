import * as types from '../constants/ActionTypes';

export default function counter(state = 0, action) {
    switch (action.type) {
        case types.INCREASE_COUNTER:
            return state + 1;
        case types.DECREASE_COUNTER:
            return state - 1;
        default:
            return state;
    }
}