import React from "react";

class Add extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      todo: ""
    };
    this.handleAddNew = this.handleAddNew.bind(this);
    this.updateAddNew = this.updateAddNew.bind(this);
  }
  updateAddNew(e){
    this.setState({
      todo: e.target.value
    });
  }
  handleAddNew() {
    this.props.addTodos(this.state.todo);
    this.setState({
      todo: ""
    });
  }
  render(){
    return(
      <div>
        <input
          type="text"
          value={this.state.todo}
          onChange={this.updateAddNew}
        />
        <button onClick={this.handleAddNew}>Add ToDo </button>
      </div>
    )
  }
}

export default Add;
