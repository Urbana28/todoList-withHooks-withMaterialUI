import React from 'react';
import TodoList from "./TodoList";
import {useSelector} from "react-redux";
import { AppStateType } from '../BLL/store';
import {ITodoList} from "../types/types";




const TodoLists: React.FC = () => {

    let todoLists:Array<ITodoList> = useSelector((state: AppStateType) => state.todoList.todoLists);


    return (
        <div className='todolists'>
            {todoLists.map(tl => <TodoList id={tl.id} todoList={tl}/>) }
        </div>
    )
};

export default TodoLists;