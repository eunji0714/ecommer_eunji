import {
    USER_RESISTER_REQUEST,
    USER_RESISTER_SUCCESS,
    USER_RESISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_PASSWORD_REQUEST,
    USER_PASSWORD_SUCCESS,
    USER_PASSWORD_FAIL,
    USER_SETPASSWORD_REQUEST,
    USER_SETPASSWORD_SUCCESS,
    USER_SETPASSWORD_FAIL, USER_SENDCODE_REQUEST, USER_SENDCODE_SUCCESS, USER_SENDCODE_FAIL
} from "../constants/userConstants";
import {emailSendVerification} from "../actions/userActions";

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

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading : true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo : action.payload}
        case USER_LOGIN_FAIL:
            return {loading : false, error : action.payload}
        case USER_LOGOUT :
            return {}
        default:
            return state
    }
}

export const userPasswordReducer = (state = {}, action) => {
    switch (action.type){
        case USER_PASSWORD_REQUEST:
            return {loading :true}
        case USER_PASSWORD_SUCCESS:
            return {loading : false, userInfo : action.payload}
        case USER_PASSWORD_FAIL:
            return {loading: false, error : action.payload}
        default:
            return state
    }
}

export const userSetPasswordReducer = (state = {}, action) => {
    switch (action.type){
        case USER_SETPASSWORD_REQUEST:
            return {loading : true}
        case USER_SETPASSWORD_SUCCESS:
            return {loading : false, success : action.payload}
        case USER_SETPASSWORD_FAIL:
            return {loading : false, error : action.payload}
        default:
            return state
    }
}

export const userSendCodeReducer = (state = {}, action) => {
    switch (action.type){
        case USER_SENDCODE_REQUEST:
            return {loading : true}
        case USER_SENDCODE_SUCCESS:
            return { lading : false, success : action.payload}
        case USER_SENDCODE_FAIL:
            return {loading: false, success : action.payload}
        default:
            return state
    }
}