import React, { Component } from "react";
const List = props => {
  return <p>{props.tasks.join(", ")}</p>;
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Code", "Eat", "Sleep"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Code", "Eat", "Sleep", "Netflix"]} />
      </div>
    );
  }
}

export default ToDo;
