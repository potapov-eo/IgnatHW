import {loadingReducer} from "./loadingReducer";
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
