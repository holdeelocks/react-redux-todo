import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;

  function submit(e) {
    e.preventDefault();
    dispatch(addTodo(input.value));
    input.value = "";
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
