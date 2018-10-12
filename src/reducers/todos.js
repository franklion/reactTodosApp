import * as types from '../constants/ActionTypes'
import { generateRandomId } from '../public/js/utils'

const initialState = [
    {
        id          : generateRandomId(),
        task        : 'buy fruit',
        isCompleted : false
    },
    {
        id          : generateRandomId(),
        task        : 'clean house',
        isCompleted : false
    },
    {
        id          : generateRandomId(),
        task        : 'wash clothes',
        isCompleted : true
    },
]
export default function todos(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TASK:
            return [
                ...state,
                {
                    id:  generateRandomId(),
                    task: action.task,
                    isCompleted: false
                }        
            ]
        case types.EDIT_TASK:
            return state.map(todo => {
                if (todo.id === action.idx) {
                    return Object.assign({}, todo, { task: action.task })
                }
                    return todo
            })
        case types.DELETE_TASK:
            return state.filter(todo => todo.id !== action.idx)
        case types.TOGGLE_TASK:
            return state.map(todo => {
                if (todo.id === action.idx) {
                    return Object.assign({}, todo, { isCompleted: !todo.isCompleted })
                } 
                    
                    return todo 
            })  
        default:
            return state
    }
}