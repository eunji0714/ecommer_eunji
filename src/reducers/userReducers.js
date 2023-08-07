import {
    USER_RESISTER_REQUEST,
    USER_RESISTER_SUCCESS,
    USER_RESISTER_FAIL
} from "../constants/userConstants";

export const userResisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_RESISTER_REQUEST:
            return {loading : true}
        case USER_RESISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_RESISTER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}