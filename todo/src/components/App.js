import React, { Component } from "react";
import "./App.css";

import AddTodo from "../containers/addTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import ListButton from "./ListButtons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <ListButton />
        <p>Sup Pup</p>
      </div>
    );
  }
}

export default App;
