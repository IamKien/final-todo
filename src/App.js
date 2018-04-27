import React from "react";
import Add from "./Add.js";
import ShowList from "./ShowList.js";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      todos: []
    };
    this.addTodos = this.addTodos.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addTodos(todo){
    this.setState(state => ({
      todos: state.todos.concat([todo])
    }));
  }

  deleteItem(key) {
   var filteredItems = this.state.todos.filter(function (todo) {
     return (todo.key !== key);
   });

   this.setState({
     todos: filteredItems
   });
 }

  render(){
  return(
    <div className="toDoListInput">
     <div>
      <h1>To Do List</h1>


      </div>
      <Add addTodos={this.addTodos}/>
      <ShowList showList={this.state.todos}
      delete={this.deleteItem}/>
    </div>



   )
  }
}

export default App;
