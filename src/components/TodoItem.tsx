const TodoItem: React.FC<{ text: string }> = (props) => {
    console.log(props);

    return <li>{props.text}</li>;
};

export default TodoItem;
