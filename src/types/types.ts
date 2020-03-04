import {ADD_TODO_LIST, DELETE_TODO_LIST, ADD_TASK, DELETE_TASK, SET_IS_DONE} from "../BLL/reducers/todoListReducer";

export interface ITodoList {
    title: string,
    id: number,
    tasks: Array<ITask>
}

export interface ITask {
    title: string,
    taskId: number,
    isDone:boolean
}

export interface IAddTodoListAction {
    type: typeof ADD_TODO_LIST,
    todoList: ITodoList
}

export interface IDeleteTodoListAction {
    type: typeof DELETE_TODO_LIST,
    todoListId: number
}

export interface IAddTaskAction {
    type: typeof ADD_TASK,
    todoListId: number,
    newTask: ITask
}
export interface IDeleteTask {
    type: typeof DELETE_TASK,
    todoListId: number,
    taskId: number
}

export interface ISetIsDoneAction {
    type: typeof SET_IS_DONE,
    todoListId: number,
    taskId: number,
    isDone: boolean
}
