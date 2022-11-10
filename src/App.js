import React from "react";
import "./App.css";
import Todos from "./Components/Todos";
import TodoInput from "./Components/TodoInput";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const saveLocalList = () => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  const getLocalList = () => {
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify([]));
    } else {
      let listLocal = JSON.parse(localStorage.getItem("list"));
      console.log("listlocal ", listLocal);
      setList(listLocal);
      /* listLocal.forEach((element) => {
        setList(element);
      }); */
    }
  };

  useEffect(() => {
    getLocalList();
  }, []);

  useEffect(() => {
    saveLocalList();
  }, [list]);

  return (
    <div className="App">
      <div className="FormInputDiv">
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
