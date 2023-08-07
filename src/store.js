import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {
    userResisterReducer
} from "./reducers/userReducers";

const reducer = combineReducers({
    userResister : userResisterReducer
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store