import React, {useState} from 'react';
import './App.scss';
import TodoLists from "./components/TodoLists";
import TodoListForm from "./components/TodoListForm";
import {addTodoList} from "./BLL/reducers/todoListReducer";
import {useDispatch} from "react-redux";



const App = () => {

    let dispatch = useDispatch();
    let [id, setId] = useState(0);

    let onClickHandler = (title:string) => {
        let newTodoList = {
            title, id, tasks: []
        };
        dispatch(addTodoList(newTodoList));
        setId(id + 1);
    }
    return (
        <div className="App">
            <div className='App__title'>What you have to do today?</div>
               <TodoListForm onClickHandler={onClickHandler} placeholder='add new list'/>
                <TodoLists/>
            </div>
    );
};

export default App;
