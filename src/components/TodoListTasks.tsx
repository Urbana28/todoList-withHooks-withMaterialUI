import React from 'react';
import { ITask } from '../types/types';
import TaskContainer from './TaskContainer';


interface IProps {
    tasks: Array<ITask>,
    tlId: number
}

const TodoListTasks:React.FC<IProps> = ({tasks, tlId, }) => {

    return (
        <div>
            <TaskContainer  tlId={tlId} tasks={tasks}/>
        </div>

    )
};

export default TodoListTasks;