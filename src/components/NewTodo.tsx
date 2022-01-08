import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (ev: React.FormEvent) => {
        ev.preventDefault();

        const enteredText = todoTextInput.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInput} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
