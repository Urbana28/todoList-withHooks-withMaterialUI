import React, {ChangeEvent} from 'react';
import {ITask} from "../types/types";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface IProps {
    task: ITask,
    deleteTaskByClick: (taskId: number) => void
    isDoneHandler: (taskId: number, isDone: boolean) => void
}



const Task:React.FC<IProps> = ({task: {title, isDone, taskId}, deleteTaskByClick, isDoneHandler}) => {
    return (
        <div className='todolist-task'>
            {/*<input onChange={(e: ChangeEvent<HTMLInputElement>) => isDoneHandler(taskId, e.currentTarget.checked)} type="checkbox" checked={isDone} id='task'/>*/}

           <div className='todolist-task__checkbox'>
               <Checkbox
                   checked={isDone}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => isDoneHandler(taskId, e.currentTarget.checked)}
                   value="primary"
                   inputProps={{ 'aria-label': 'primary checkbox' }}
                   id='task'
                   size="small"
               />
           </div>
            {!isDone ? <label htmlFor="task"><strong>{taskId}</strong> - {title}</label> : <label className='todolist-task__doneTask' htmlFor="task">{taskId} - {title}</label>}
            {/*<button onClick={() => deleteTaskByClick(taskId)} className='button'>x</button>*/}
            <IconButton size="small" aria-label="delete" onClick={() => deleteTaskByClick(taskId)}>
                <DeleteIcon />
            </IconButton>
        </div>
    )
};
export default Task;