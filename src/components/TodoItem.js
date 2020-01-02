import React, { useContext } from "react";
import { Context } from "./AppContext";

export const TodoItem = ({ id, completed, text }) => {
  const dispatch = useContext(Context);
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "completed", payload: id })}
      />
      <input
        type="text"
        defaultValue={text}
        onChange={({ target: { value } }) =>
          dispatch({ type: "change", payload: id, value })
        }
      />
      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
      {id}
    </div>
  );
};
