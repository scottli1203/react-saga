import { combineReducers } from 'redux'
import {
    GET_ALL_USERS,
    GET_All_DEPS
} from '../actions'

function getAllUsers(state = {}, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return action.users
        default:
            return state
    }
}

function getAllDeps(state = {}, action) {
    switch (action.type) {
        case GET_All_DEPS:
            return action.deps
        default:
            return state
    }
}

const rootReducer = combineReducers({
    getAllUsers,
    getAllDeps
})

export default rootReducer
