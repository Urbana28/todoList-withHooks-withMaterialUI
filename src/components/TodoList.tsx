import React, { useState } from 'react';
import '../App.scss';
import TodoListFooter from './TodoListFooter';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListForm from "./TodoListForm";
import {ITodoList} from "../types/types";
import {useDispatch} from "react-redux";
import {addTask, deleteTodoList} from '../BLL/reducers/todoListReducer';

interface IProps {
    todoList: ITodoList,
    id: number
}

const TodoList:React.FC<IProps> = ({todoList, id}) => {
    let dispatch = useDispatch();
    let [taskId, setTaskId] = useState(1);
    let [filterValue, setFilterValue] = useState('All');
    let deleteListByClick = () => {
        dispatch(deleteTodoList(id))
    };
    let addTaskByClick = (title:string) => {
        let newTask = {
            title, taskId, isDone: false
        };
        dispatch(addTask(id, newTask));
        setTaskId(taskId + 1)
    };

    return (
        <div>
            <TodoListHeader deleteListByClick={deleteListByClick} title={todoList.title} />
            <TodoListForm onClickHandler={addTaskByClick} placeholder='add new task' />
            <TodoListTasks tlId={id} tasks={todoList.tasks.filter(t => {
                if (filterValue === 'All') {
                    return true
                }
                if (filterValue === 'Done') {
                    return t.isDone === true
                }
                if (filterValue === 'Active') {
                    return t.isDone === false
                }
            })}/>
            <TodoListFooter filterValue={filterValue} setFilterValue={setFilterValue}/>
        </div>
    )
};

export default TodoList;