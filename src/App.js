import React from "react";
import Add from "./Add.js"

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      todos: []
    };
    this.addTodos = this.addTodos.bind(this);
  }

  addTodos(todo){
    this.setState(state => ({
      todos: state.todos.concat([todo])
    }));
  }

  render(){
  return(
    <div className="toDoListInput">
      <h1>To Do List</h1>
      <Add add={this.addToDos}/>
    </div>

   )
  }

}

export default App;
