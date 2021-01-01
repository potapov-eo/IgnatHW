import {Dispatch} from "redux";

type initStateType ={
    loading:boolean
}

const initState = {
    loading:false
};

export const loadingReducer = (state = initState, action: ActionsLoadingReducerType): initStateType => { // fix any
    switch (action.type) {
        case "LOADING-STATUS": {
            return {...(state), loading: action.loading}
        }
        default: return state;
    }
};

export const loadingAC = (loading:boolean) => ({
    type:"LOADING-STATUS",
    loading
}) as const ;

 export const loadingTC = () => (dispatch: Dispatch<ActionsLoadingReducerType>) => {
         dispatch(loadingAC(true))
         setTimeout(()=>{ dispatch(loadingAC(false))}, 2000);


 }
 export type loadingACType= ReturnType<typeof loadingAC>
 type ActionsLoadingReducerType = loadingACType