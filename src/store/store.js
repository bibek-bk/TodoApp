import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './Slices/todoSlice'
import {loadState, saveState } from "../utils/localstorage";

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        todo: todoSlice
    },
    preloadedState: preloadedState,

})

//following code  listens to state changes and saves the state to local storage whenever it changes.

store.subscribe(() => {
    saveState(store.getState());
  });
export default store