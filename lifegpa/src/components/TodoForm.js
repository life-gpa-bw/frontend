import React from 'react';

function TodoForm(props) {

    
    return (
        <form onSubmit = {props.addTodo}>
            <input 
                placeholder =" add item. . . " 
                value={props.todo}
                onChange={props.handleChanges}
            />

            <button onClick = {props.addTodo}>Add</button>
            <button onClick = {props.removeCompleted}>Clear</button>
        </form>
    );
}

export default TodoForm;