import * as types from '../constants/ActionTypes';

export function calcBmi(height, weight) {
    return {
        type: types.CALC_BMI,
        height,
        weight,
    }
}

export function resetBmi() {
    return {
        type: types.RESET_BMI,
    }
}