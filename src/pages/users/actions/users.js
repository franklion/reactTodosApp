import * as types from '../../../constants/ActionTypes';
import axios from 'axios';


export function loadUsers() {
    return function (dispatch) {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data )
            .then(users => {
                return users.map(user => { 
                    return { key: user.id, name: user.name, phone: user.phone , email: user.email }
                });
            })
            .then(newUsers => {
                dispatch({ type: types.LOAD_USERS, users: newUsers });
            }) 
            .catch(err => console.log(err))
    }
}