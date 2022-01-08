import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (ev: React.FormEvent) => {
        ev.preventDefault();

        const enteredText = todoTextInput.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInput} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
