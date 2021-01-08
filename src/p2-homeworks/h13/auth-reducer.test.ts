import {authReducer, setErrorAC, setSuccessAC} from "./auth-reducer";

let startState: {
    success:boolean,
    error:string
};
beforeEach(() => {
    startState = {
        success:true,
        error:""
    };
});

test('correct success should be  added ', () => {
    const action = setSuccessAC(false);

    const endState = authReducer(startState, action)

    expect(endState.success).toBe(false);

});
test('correct error should be  added ', () => {
    const action = setErrorAC("correct error");

    const endState = authReducer(startState, action)

    expect(endState).toEqual({
        success: true,
        error: "correct error"
    })

});