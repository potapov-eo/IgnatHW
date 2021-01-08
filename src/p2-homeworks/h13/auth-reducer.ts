import {Dispatch} from 'redux'
import {loadingAC, loadingACType} from "../h10/bll/loadingReducer";
import {RequestAPI} from "./RequestsAPI";


const initialState = {
    success:true,
    error:""
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-SUCCESS':
            return {...state, success: action.success}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}
// actions
export const setSuccessAC = (success: boolean) =>
    ({type: 'SET-SUCCESS', success} as const)
export const setErrorAC = (error: string) =>
    ({type: 'SET-ERROR', error} as const)

// thunks
export const setSuccessTC = (success: boolean) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(loadingAC(true))
    RequestAPI.auth({success:success})
        .then(res => {debugger
            if (res.status === 200) {

                dispatch(setErrorAC(res.data.errorText))

            } else {
                dispatch(setErrorAC("server error"))
            }
        })
        .catch((error) => {debugger
            dispatch(setErrorAC(error.response ? error.response.data.errorText : error.message))
            console.log( {...error} ); console.log( error.response ? error.response.data.errorText : error.message)
        }).finally(()=> dispatch(loadingAC(false))
        )
}



type ActionsType = ReturnType<typeof setSuccessAC>|loadingACType|ReturnType<typeof setErrorAC>



