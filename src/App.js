import React from "react";
import "./App.css";
import Todos from "./Components/Todos";
import TodoInput from "./Components/TodoInput";
import Footer from "./Components/Footer";
import { useState } from "react";
import uuid from "react-uuid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee);

function App() {
  const [inputText, setInputText] = useState("");
  //const [input2, setTodo2] = useState(inputArea);
  const [list, setList] = useState([{}]);

  return (
    <div className="App">
      <div className="FormInputDiv">
        <h1>ToDo || !ToDo</h1>
        <TodoInput
          inputText={inputText}
          setInputText={setInputText}
          list={list}
          setList={setList}
        />
      </div>
      <div className="TodosDiv">
        <Todos list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
