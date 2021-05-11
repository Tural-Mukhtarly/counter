
import { createStore } from "redux";


type ActionType = {
    type: string
    payload: number
}

const initialState = {
    cash: 5,
}

export type InitialStateType = typeof initialState
const reducers = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD_VALUE":
            return { ...state, cash: state.cash + action.payload }
        case "DECREMENT_CASH":
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}
export type RootState = ReturnType<typeof reducers>

export const store = createStore(reducers)


