import {loadingReducer} from "./loadingReducer";
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
     loading: loadingReducer,

 });

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

 export type AppStoreType = ReturnType<typeof reducers>

 // @ts-ignore
 window.store = store; // for dev
