import { createStore, combineReducers } from "redux";
import { todoListReducer } from "./reducers/todoListReducer";

let reducers = combineReducers({
    todoList: todoListReducer
});

export let store = createStore(reducers);
export type AppStateType = ReturnType<typeof reducers>;


