import { createStoreHook } from "react-redux";

// type ActionType = {
//     type: string
//     payload: number
// }
const initialState = {
    value: 5
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_VALUE":
            return { ...state, value: state.value + action.payload }
            break;

        default:
            break;
    }
}

const store = createStoreHook(reducers)

export default store