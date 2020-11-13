export type PersonType = {
    _id: number
    name: string
    age: number
}
export type StateType = Array<PersonType>

export const homeWorkReducer = (state: StateType, action: ActionTypeType): StateType => {
    switch (action.type) {
        case "sort":
            switch (action.payload) {
                case "up":
                    state.sort(function (a: PersonType, b: PersonType) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    return state
                case "down":
                    state.sort(function (a: PersonType, b: PersonType) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        // a должно быть равным b
                        return 0;
                    });
                    return state
            }
        case "check": {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
};
export type payloadType = "up" | "down"
export type sortACType = {
    type: "sort"
    payload: payloadType

}
export type checkACType = {
    type: "check"
    payload: number
}
export type ActionTypeType = sortACType | checkACType
export const sortAC = (payload: payloadType): sortACType => {
    return {
        type: 'sort',
        payload: payload,
    }
}
export const checkAC = (payload: number): checkACType => {
    return {
        type: 'check',
        payload: payload
    }
}