import axios from "axios";
import {
    USER_RESISTER_REQUEST,
    USER_RESISTER_SUCCESS,
    USER_RESISTER_FAIL,
} from "../constants/userConstants";

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
        const {data, status} = await axios.post("http://localhost:8000/api/auth/signup", userInput)
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