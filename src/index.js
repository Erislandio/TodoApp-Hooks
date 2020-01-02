import React, { useReducer, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { appReducer } from "./components/appReducer";
import { TodoList } from "./components/TodoList";
import { Context } from "./components/AppContext";

function customHook(cb) {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  });
}

function App() {
  const [state, dispatch] = useReducer(appReducer, []);

  customHook(() => {
    const raw = localStorage.getItem("data");
    dispatch({ type: "reset", payload: JSON.parse(raw) });
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={dispatch}>
      <div>
        <h1>Todo app</h1>
        <button onClick={() => dispatch({ type: "add" })}>New todo</button>
        <TodoList items={state} />
      </div>
    </Context.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
