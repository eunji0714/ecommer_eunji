import axios from "axios";
import {
    USER_RESISTER_REQUEST,
    USER_RESISTER_SUCCESS,
    USER_RESISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
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
                payload : data.data,
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