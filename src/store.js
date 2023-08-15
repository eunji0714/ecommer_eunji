import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {
    userLoginReducer, userPasswordReducer,
    userResisterReducer, userSetPasswordReducer
} from "./reducers/userReducers";

const reducer = combineReducers({
    userResister : userResisterReducer,
    userLogin : userLoginReducer,
    userPassword : userPasswordReducer,
    userSetPassword : userSetPasswordReducer,
})

const tokenInfoFromStorage = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin : {token : tokenInfoFromStorage, userInfo : userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store