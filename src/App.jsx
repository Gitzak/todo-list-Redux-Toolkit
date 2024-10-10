import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-3">Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
