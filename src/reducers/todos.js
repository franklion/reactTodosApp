import * as types from '../constants/ActionTypes'
import { generateRandomId } from '../../public/js/utils'

const initialState = {
    originalTodos: [
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
    ],
    search: {
        filter: 'SHOW_ALL',
        keyword: '',
    },
}
export default function todos(state = initialState, action) {
    switch (action.type) {
        // 新增 todo
        case types.ADD_TASK: {
            const newTodos = [
                ...state.originalTodos,
                {
                    id: generateRandomId(),
                    task: action.task,
                    isCompleted: false
                }
            ]
                return Object.assign({}, state, { originalTodos: newTodos })
        }
        // 修改 todo
        case types.EDIT_TASK: {
            const newTodos = [...state.originalTodos].map(todo => {
                if (todo.id === action.idx) {
                    return Object.assign({}, todo, { task: action.task })
                }
                    return todo
            })
            return Object.assign({}, state, { originalTodos: newTodos })
        }
        // 刪除 todo
        case types.DELETE_TASK: {
            const newTodos = [...state.originalTodos].filter(todo => todo.id !== action.idx)
            return Object.assign({}, state, { originalTodos: newTodos })
        }     
        // 反向完成/未完成狀態 todo
        case types.TOGGLE_TASK: {
            const newTodos = [...state.originalTodos].map(todo => {
                if (todo.id === action.idx) {
                    return Object.assign({}, todo, { isCompleted: !todo.isCompleted })
                }
                    return todo
            })  
            return Object.assign({}, state, { originalTodos: newTodos })
        }    
        // 紀錄 搜尋 過濾狀態
        case types.SET_FILTER: {
            const newSearch = Object.assign({}, state.search, { filter: action.filter })
            return Object.assign({}, state, { search: newSearch })
        }
        // 紀錄 搜尋 關鍵字
        case types.SET_KEYWORD: {
            const newSearch = Object.assign({}, state.search, { keyword: action.keyword })
            return Object.assign({}, state, { search: newSearch })
        }    
        default:
            return state
    }
}