import * as types from '../../../constants/ActionTypes'
import axios from 'axios'

// 第一種寫法
export function loadUsers() {
    return function (dispatch) {

        dispatch({ type: types.LOAD_USERS })

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data )
            .then(users => {
                return users.map(user => { 
                    return { key: user.id, name: user.name, phone: user.phone , email: user.email }
                })
            })
            .then(newUsers => dispatch({ type: types.LOAD_USERS_SUCCESS, users: newUsers }) ) 
            .catch(err => dispatch({ type: types.LOAD_USERS_ERROR }) )
    }
}

// 第二種寫法
export function loadUsers2() {
    return function (dispatch) {

        dispatch({ type: types.IS_LOADING_USERS, isLoading: true })

        return new Promise((resolve, reject) => { 
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data )
            .then(users => {
                return users.map(user => { 
                    return { key: user.id, name: user.name, phone: user.phone , email: user.email }
                })
            })
            .then(newUsers => {
                resolve('load users success!');
                dispatch({ type: types.IS_LOADING_USERS, isLoading: false })
                dispatch({ type: types.LOAD_USERS2, users: newUsers }) 
            } ) 
            .catch(err => {
                reject('load users error :(');
                dispatch({ type: types.IS_LOADING_USERS, isLoading: false })
            } )
        })
        
    }
}