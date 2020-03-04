import React from 'react';
import Task from "./Task";
import { ITask } from '../types/types';
import {useDispatch} from "react-redux";
import {deleteTask, setIsDone} from "../BLL/reducers/todoListReducer";


interface IProps {
    tasks: Array<ITask>,
    tlId: number

}

const TaskContainer:React.FC<IProps> = ({tasks, tlId}) => {
    let dispatch = useDispatch();
    let deleteTaskByClick = (taskId: number) => {
        dispatch(deleteTask(tlId, taskId))
    };

    let isDoneHandler = (taskId: number, isDone: boolean) => {
        dispatch(setIsDone(tlId, taskId, isDone))
    }

    let changeIsDone = () => {

    }
    return (
        <div>
            {tasks.map(t => <Task isDoneHandler={isDoneHandler}  deleteTaskByClick={deleteTaskByClick} task={t}/>)}
        </div>
    )
};

export default TaskContainer;