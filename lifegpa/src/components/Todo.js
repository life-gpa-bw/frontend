import React from "react";

function Todo(props) {
    
  const removeTodo = event => {
    event.stopPropagation();

    props.removeTodo(props.todo.id);
  };

  const toggleTodo = event => {
    event.stopPropagation();

    props.toggleTodo(props.todo.id);
  };

  return (
    <div>
      <h3 onClick={toggleTodo} key={props.todo.id}>
        {props.todo.todo}
        {props.todo.status && <i className="fas fa-check" />}

        <button onClick={removeTodo} key={props.todo.id}>
        Delete
      </button>
      </h3>
    </div>
  );
}

export default Todo;
