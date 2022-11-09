import React from "react";
import "./App.css";
import Todos from "./Components/Todos";
import TodoInput from "./Components/TodoInput";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="FormInputDiv">
        <h1>ToDo || !ToDo</h1>
        <TodoInput />
      </div>
      <div className="TodosDiv">
        <Todos />
      </div>
    </div>
  );
}

export default App;
