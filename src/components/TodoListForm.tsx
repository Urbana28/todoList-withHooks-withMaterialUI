import React, {ChangeEvent, useState} from 'react';
import {addTodoList} from "../BLL/reducers/todoListReducer";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



interface IProps {
    placeholder: string,
    onClickHandler: (title:string) => void
}


const TodoListForm:React.FC<IProps> = ({placeholder, onClickHandler}) => {
    let [title, setTitle] = useState('');
    let addItem = () => {
        onClickHandler(title);
        setTitle('')
    };

    return (
        <div className='add_todolist_form'>
            {/*<input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className='add_form__input' type="text" placeholder={placeholder} />*/}
            <TextField color="secondary" size="small" id="outlined-basic" label={placeholder} variant="outlined" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            {/*<button onClick={addItem} className='button'>+</button>*/}
            <div className='add_todolist_form__button'>
                <Fab color="secondary" aria-label="add" size="small" onClick={addItem}>
                    <AddIcon />
                </Fab>
            </div>


        </div>
    )
};

export default TodoListForm;