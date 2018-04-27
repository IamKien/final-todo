import React from "react";

class ShowList extends React.Component {
  constructor(props) {
    super(props);

    this.createList = this.createList.bind(this);
  }
  createList(item, index) {
    return (
      <li key={index}>
        {item}
        <button onClick={() => this.delete(index)} key={item.key}>
          Delete
        </button>
        <button>Edit</button>
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }
  render() {
    var itemList = this.props.showList;
    var listItems = itemList.map(this.createList);

    return <ul className="listContainer">{listItems}</ul>;
  }
}

export default ShowList;
