import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { createStore } from "redux";

// // type ActionType = {
// //     type: string
// //     payload: number
// // }
// const initialState = {
//   cash: 5,
// }
// export type InitialStateType = typeof initialState

// const reducers = (state = initialState, action: any) => {
//   switch (action.type) {
//     case "ADD_VALUE":
//       return { ...state, value: state.cash + action.payload }
//     default:
//       return state
//   }
// }

// const store = createStore(reducers)

// export type AppStateType = ReturnType<typeof reducers>



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
