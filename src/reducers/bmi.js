import * as types from '../constants/ActionTypes';

export default function counter(state = {
    bmi: 0,
    data: []
}, action) {
    switch (action.type) {
        case types.CALC_BMI:
            const heightMeter = action.height / 100;
            const newBmi = (action.weight / Math.pow(heightMeter, 2)).toFixed(1);
            return Object.assign({}, state, { bmi: newBmi });
        case types.RESET_BMI:
            return Object.assign({}, state, { bmi: 0 });
        case types.TEST_BMI:
            return Object.assign({}, state, { data: action.data});
        default:
            return state;
    }
}

