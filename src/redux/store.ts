import { createStore } from "redux";

type ActionType = {
    type: string
    payload: number
}

const initialState = {
    start: 0,
    max: 2
}

export type InitialStateType = typeof initialState

const reducers = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "START_VALUE":
            return { ...state, start: action.payload }
        case "MAX_VALUE":
            return { ...state, max: action.payload }
        case "ADD_VALUE":
            return { ...state, start: state.start + action.payload }
        case "DECREMENT_CASH":
            return { ...state, start: state.start - action.payload }
        default:
            return state
    }
}

export type RootState = ReturnType<typeof reducers>

export const store = createStore(reducers)


