import React from "react";
import CreateTodo from "./CreateTodo";
import TodosCounter from "./TodosCounter";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="container">
      <TodosCounter />
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;
