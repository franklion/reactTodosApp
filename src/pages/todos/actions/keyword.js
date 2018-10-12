import * as types from '../../../constants/ActionTypes'

export function setKeyword(keyword) {
    return {
        type: types.SET_KEYWORD,
        keyword
    }
}
