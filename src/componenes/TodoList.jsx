import { useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todos, onDelte, onToggle}) {

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <TodoListItem key={todo.id} todo = {todo} onDelte={onDelte} onToggle={onToggle}/>
                    ))}
            </ul>
        </>
    );
}

export default TodoList;