import {
    ITodoList,
    IAddTodoListAction,
    IDeleteTodoListAction,
    IAddTaskAction,
    ITask,
    IDeleteTask, ISetIsDoneAction
} from "../../types/types";

export const ADD_TODO_LIST = 'ADD_TODO_LIST';
export const DELETE_TODO_LIST = 'DELETE_TODO_LIST';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE-TASK';
export const SET_IS_DONE = 'SET_IS_DONE'

interface IInitialState {
    todoLists: Array<ITodoList>
}

let initialState: IInitialState = {
    todoLists: []
};

export let todoListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO_LIST:
            return {
                ...state,
                todoLists: [...state.todoLists, action.todoList]
            };
        case DELETE_TODO_LIST:
            return {
                ...state,
                todoLists: state.todoLists.filter(tl => tl.id != action.todoListId)
            };

        case ADD_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(tl => {
                        if (tl.id === action.todoListId) {
                            return {...tl, tasks: [...tl.tasks, action.newTask]}
                        } else {
                            return tl
                        }
                    }
                )
            };
        case DELETE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(tl => {
                        if (tl.id === action.todoListId) {
                            return {...tl, tasks: tl.tasks.filter(t => t.taskId != action.taskId)}
                        } else {
                            return tl
                        }
                    }
                )
            };
        case SET_IS_DONE:
            return {
                ...state,
                todoLists: state.todoLists.map(tl => {
                    if(tl.id === action.todoListId) {
                        return {...tl, tasks: tl.tasks.map(t => {
                            if(t.taskId === action.taskId) {
                                return {...t, isDone: action.isDone}
                            } return t
                        })}
                    } return tl
                })
            }
        default:
            return state
    }
};

export let addTodoList = (todoList: ITodoList): IAddTodoListAction => {
    return {type: ADD_TODO_LIST, todoList}
};
export let deleteTodoList = (todoListId: number): IDeleteTodoListAction => {
    return {type: DELETE_TODO_LIST, todoListId}
};
export let addTask = (todoListId: number, newTask: ITask): IAddTaskAction => {
    return {type: ADD_TASK, todoListId, newTask}
};
export let deleteTask = (todoListId: number, taskId: number): IDeleteTask => {
    return {type: DELETE_TASK, todoListId, taskId}
};

export let setIsDone = (todoListId: number, taskId: number, isDone: boolean): ISetIsDoneAction => {
    return {type: SET_IS_DONE, taskId, todoListId, isDone}
}