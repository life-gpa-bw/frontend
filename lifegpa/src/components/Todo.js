import React from 'react';
import './todo.css';

function Todo(props) {
    let bananaNames = "item";
    if (props.todo.completed) {
        bananaNames += " purchased";
    }

    function updateCompletedHere() {
        props.toggleComplete(props.todo.id)
    }

    return (
        <div className = {bananaNames} onClick={updateCompletedHere} >
            {props.todo.task}
        </div>
    );
}

export default Todo;