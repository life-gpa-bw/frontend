import React from 'react';
import {Component} from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import './components/Todo.css';
import Score from './components/Score';

const todos = [
  {
    task: "Write 3 scenes",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Buy cookie dough",
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
 

  handleChanges = event => {
    this.setState({
      inputField: event.target.value
    });
  };


  addTodo = event => {
    event.preventDefault();

    this.setState( {
      todo:[...this.state.todo, { task: this.state.inputField, id: Date.now(), completed: false } ],
      inputField:'' 
     });
  };

  toggleComplete = id => {
    const newTodosArray = this.state.todo.map(todo => {
       if (todo.id === id) {
         return { ...todo, completed: !todo.completed}
       }
      return todo;
    })

    this.setState( {todo: newTodosArray } );
  }

  removeCompleted = () => {
    const clearedTodosArray = this.state.todo.filter((bananaTodo) => {
      if (!bananaTodo.completed) {
        return true
      } else {
        return false;
      }
    })
    this.setState({ todo: clearedTodosArray})
  }


  render() {
    return (
      <div className = "cool-style">
        <h1>LifeGPA</h1>

        <div className = "list-style">
          <ToDoList todosOnState={this.state.todo} toggleComplete={this.toggleComplete} />
        </div>

        <ToDoForm addTodo={this.addTodo} todo={this.state.inputField} handleChanges={this.handleChanges} removeCompleted={this.removeCompleted} handleSubmit={this.handleSubmit} />

        <Score />

      </div>
      

    );
  }
}



export default App;