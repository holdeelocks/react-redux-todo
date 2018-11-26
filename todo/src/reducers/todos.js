import React from "react";

const todos = (initialState = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...initialState,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ];
    case "TOGGLE_TODO":
      return initialState.map(item =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    default:
      return initialState;
  }
};

export default todos;
