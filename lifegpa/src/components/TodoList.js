import React from 'react';
import Todo from "./Todo";


function TodoList(props) {
    return (
        <div>
            {props.todosOnState.map(todo => (
                <Todo key ={todo.id} todo ={todo} toggleComplete={props.toggleComplete} />
            ))}
        </div>
    )
}

export default TodoList;