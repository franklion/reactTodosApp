import * as types from '../constants/ActionTypes';
import axios from 'axios';

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


export function testBmi(data) {
    return {
        type: types.TEST_BMI,
        data: ['test', 'frank']
    }
    // return dispatch => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.data )
    //             .then(res => {
    //                 return {
    //                     type: types.TEST_BMI,
    //                     data: res,
    //                 }
    //             })
    //         .catch(err => console.log(err))
    // }
}