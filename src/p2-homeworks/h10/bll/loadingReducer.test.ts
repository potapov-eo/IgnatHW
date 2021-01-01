// @ts-ignore
import {loadingAC, loadingReducer} from "./loadingReducer";

let startState: {
    loading:boolean
};
beforeEach(() => {
    startState = {
        loading:false
    };
});

test('correct loading should be  correct ', () => {
    const action = loadingAC(true);

    const endState = loadingReducer(startState, action)

    expect(endState.loading).toBe(true);

});