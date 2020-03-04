import React from 'react';
import '../App.scss';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface IProps {
    title: string,
    deleteListByClick: () => void
}

const TodoListHeader:React.FC<IProps> = ({title, deleteListByClick}) => {


    return (
        <div className='todolist'>
            <div className='todolist-header'>
                <span className='todolist-header__title'>{title}</span>
                <IconButton onClick={deleteListByClick} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
               {/* <button onClick={deleteListByClick} className='button'>x</button>*/}
            </div>
        </div>
    )
}


export default TodoListHeader;