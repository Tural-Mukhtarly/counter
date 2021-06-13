import { createStore } from "redux";

type ActionType = {
    type: string
    payload: number
}

const initialState = {
    start: 0,
    max: 2,
}

export type InitialStateType = typeof initialState

const CounterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "START_VALUE":
            return { ...state, start: action.payload }
        case "MAX_VALUE":
            return { ...state, max: action.payload }
        case "INC_VALUE":
            return { ...state, start: state.start + action.payload }
        case "DEC_VALUE":
            return { ...state, start: state.start - action.payload }
        default:
            return state
    }
}

export const incValueAC = (payload: number) => ({ type: "INC_VALUE", payload: payload } as const)
export const decValueAC = (payload: number) => ({ type: "DEC_VALUE", payload: payload } as const)

export type RootState = ReturnType<typeof CounterReducer>

let preState;
const persistedStateString = localStorage.getItem("app-state")
if (persistedStateString) {
    preState = JSON.parse(persistedStateString)
}


export const store = createStore(CounterReducer,preState)



store.subscribe(() => {
    localStorage.setItem("app-state", JSON.stringify(store.getState()))
})



