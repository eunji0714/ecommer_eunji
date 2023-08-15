import axios from "axios";
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
    USER_SETPASSWORD_FAIL,
    USER_SENDCODE_REQUEST, USER_SENDCODE_SUCCESS, USER_SENDCODE_FAIL,
} from "../constants/userConstants";

const baseURL = "http://localhost:8000/api/auth"

export const signup = (
    email, password, username, isMarketingAgree, isPersonalInfoAgree,
) => async (dispatch) => {
    try{
        dispatch({
            type : USER_RESISTER_REQUEST
        })
        const userInput = {
            email, password, username, isMarketingAgree, isPersonalInfoAgree, provider : "local", profileImg : "",

        }
        const {data, status} = await axios.post(baseURL + "/signup", userInput)
        if(status === 201){
            dispatch({
                type : USER_RESISTER_SUCCESS,
                payload : data.data,
            })
        }


    }catch (err){
        dispatch({
            type : USER_RESISTER_FAIL,
            payload:
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const login = (
    email, password
)=> async (dispatch) => {
    try{
        dispatch({
            type : USER_LOGIN_REQUEST
        })
        const userInput = {
            email, password
        }
        const {data, status} = await axios.post(baseURL + "/login", userInput)
        if(status === 200){
            dispatch({
                type : USER_LOGIN_SUCCESS,
                payload : data.data.user,
            })
            localStorage.setItem("token", JSON.stringify(data.data.token))
            localStorage.setItem("userInfo", JSON.stringify(data.data.user))
        }
    }catch (err){
        dispatch({
            type : USER_LOGIN_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('token')
    dispatch({type : USER_LOGOUT})
}

export const forgotPassword = (email) => async (dispatch) => {
    try{
        dispatch({
            type : USER_PASSWORD_REQUEST
        })
        const userInput = {
            email
        }
        const {data, status} = await axios.post (baseURL + "/forgot/password", userInput)
        console.log(userInput)
        if(status === 201){
            dispatch({
                type : USER_PASSWORD_SUCCESS,
                payload : data.data,
            })

        }
    }catch (err){
        dispatch({
            type : USER_PASSWORD_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}

export const changePassword = (password, token) => async (dispatch) => {
    try{
        dispatch({
            type : USER_SETPASSWORD_REQUEST
        })
        const userInput = {
            password, token
        }
        const {status} = await axios.post(baseURL + "/change/password", userInput)
        if(status === 201){
            dispatch({
                type : USER_SETPASSWORD_SUCCESS,
                payload : true,
            })
        }
    }catch (err){
        dispatch({
            type : USER_SETPASSWORD_FAIL,
            payload :
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}

export const emailSendVerification = (email) => async (dispatch) => {
    try{
        dispatch({
            type : USER_SENDCODE_REQUEST
        })
        const userInput = {
            email
        }
        const {status} = await axios.post(baseURL + "/email/send", userInput)
        console.log(status)
        if(status===201){
            dispatch({
                type: USER_SENDCODE_SUCCESS,
                payload : true,
            })
        }
    }catch (err){
        dispatch({
            type : USER_SENDCODE_FAIL,
            payload :
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}