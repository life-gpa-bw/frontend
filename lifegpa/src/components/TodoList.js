import React from "react";

import { connect } from "react-redux";

import Todo from './Todo';

import { addTodo, removeTodo, toggleTodo } from "./actions";

class TodoList extends React.Component {
  state = {
    todos: [],
    inputField: ""
  };

  handleChanges = e => {
    this.setState({
      inputField: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();

    this.props.addTodo(this.state.inputField);
    this.setState ({ inputField: ""})
  };

  toggleTodo = (id) => {
      this.props.toggleTodo(id)
  }

  removeTodo = (id) => {
      this.props.removeTodo(id)
  }

  render() {
    return (
      <div>

        <div>
          {this.props.todos && this.props.todos.map(todo => (
              <Todo removeTodo={this.removeTodo} todo={todo} toggleTodo={this.toggleTodo} />
          ))}
        </div>

        <input 
        type='text'
        value={this.state.newTodo}
        onChange={this.handleChanges} 
        placeholder="What to do..." 
        />

        <button onClick={this.addTodo}> Add </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, toggleTodo }
)(TodoList);
