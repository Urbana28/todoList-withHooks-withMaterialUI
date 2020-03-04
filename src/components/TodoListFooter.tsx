import React, { useState } from 'react';
import '../App.scss';
import {ITask} from "../types/types";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';



interface IProps {
    filterValue: string,
    setFilterValue: (arg:string) => void
}

const TodoListFooter:React.FC<IProps> = ({filterValue, setFilterValue}) => {



    let onAllFilterClick = () => {setFilterValue('All')};
    let onDoneFilterClick = () => {setFilterValue('Done')};
    let onActiveFilterClick = () => {setFilterValue('Active')};

    let classForAll = filterValue === 'All' ? 'button__filter-active': 'button';
    let classForDone = filterValue === 'Done' ? 'button__filter-active': 'button';
    let classForActive = filterValue === 'Active' ? 'button__filter-active': 'button';

    return (
        <div>
            <div className='todolist-buttons'>
                <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                    <Button onClick={onAllFilterClick} className={classForAll}>all</Button>
                    <Button onClick={onDoneFilterClick} className={classForDone}>done</Button>
                    <Button onClick={onActiveFilterClick} className={classForActive}>active</Button>
                </ButtonGroup>
            </div>
        </div>
    )
};

export default TodoListFooter;