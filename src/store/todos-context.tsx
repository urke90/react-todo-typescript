import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevState) => prevState.concat(newTodo));
    };

    const removeTodoHandler = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const contextValueObject: TodosContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValueObject}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
