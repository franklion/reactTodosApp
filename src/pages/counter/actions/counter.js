import * as types from '../../../constants/ActionTypes'


export function increaseCounter() {
    return {
        type: types.INCREASE_COUNTER
    }
}

export function decreaseCounter() {
    return {
        type: types.DECREASE_COUNTER
    }
}

export function resetCounter() {
    return {
        type: types.RESET_COUNTER
    }
}