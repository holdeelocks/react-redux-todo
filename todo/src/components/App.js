import React, { Component } from "react";
import "./App.css";

import AddTodo from "../containers/addTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <p>Sup Pup</p>
      </div>
    );
  }
}

export default App;
