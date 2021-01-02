
export type themeType='dark'| 'red'| 'some'
export type themeReducerInitStateType={
    themes:themeType
}


const initState = {
    themes:'some'as const
}

export const themeReducer = (state:themeReducerInitStateType = initState, action: ActionsChangeThemeReducerType): themeReducerInitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, themes:action.theme}
        }
        default: return state;

    }
};


export const changeThemeAC = (theme:themeType) => ({
    type:"CHANGE-THEME",
    theme
}) as const ;

export type loadingACType= ReturnType<typeof changeThemeAC>
type ActionsChangeThemeReducerType = loadingACType