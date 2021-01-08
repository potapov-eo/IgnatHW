import {loadingReducer} from "./loadingReducer";
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {themeReducer} from "../../h12/bll/themeReducer";
import {authReducer} from "../../h13/auth-reducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    auth: authReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
