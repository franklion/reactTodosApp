import * as types from '../constants/ActionTypes';
import axios from 'axios';


export function loadUsers() {
    return function (dispatch) {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data )
            .then(users => {
                dispatch({ type: types.LOAD_USERS, users });
            })
            .catch(err => console.log(err))

    }
}
