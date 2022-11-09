import React from "react";
import { useState } from "react";
export default function Todos() {
  const [inputArea, setTodo] = useState("");
  const [input2, setTodo2] = useState(inputArea);
  const [list, setList] = useState([]);

  //const arrayTodos = [{ todo: "wash up", checkDone: false }];

  /* const createObject = (todo) => {
    const someObject = {
      todo: todo,
      checkDone: false,
    };
    console.log(someObject);
    arrayTodos.push(someObject);
    console.log(arrayTodos);
  }; */

  /*   const getInputValue = (e) => {
    const userValue = e.target.value;    
    if (userValue === "") {
      alert("Do you want to do nothing?");
      return;
    }
    
    createObject(userValue);
  }; */

  /* const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      //console.log(e);
      getInputValue(e);
    }
  }; */

  const clickPressHandler = () => {
    setTodo2(inputArea);
  };

  function editArea() {
    //li.style.display = "none";
    return (
      <div>
        <button></button>
        <input
          type="text"
          //id="inputArea"
          name="inputArea"
          //value={input}
          /* onKeyDown={keyPressHandler}
          placeholder="What would you like to do?" */
        />
      </div>
    );
  }

  const handleCheckbox = (event) => {
    if (event.target.style.Textdecoration) {
      //div.target.style.removeProperty("text-decoration");
    } else {
      //div.target.style.setProperty("text-decoration", "line-through");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputArea);
    const someObject = {
      todo: inputArea,
      checkDone: false,
    };
    setList((todo) => [...todo, someObject]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          //type="text"
          //id="inputArea"
          className="inputArea"
          value={inputArea}
          onChange={(e) => setTodo(e.target.value)}
          //onKeyDown={keyPressHandler}
          placeholder="What would you like to do?"
        />
        <button className="addButton" onClick={clickPressHandler}>
          Add
        </button>
      </form>
      <hr></hr>
      <div>
        {list.map((todo) => (
          <div className="liElement">
            <input type="checkbox" onClick={handleCheckbox} />
            <li
              //onClick={((liElement.style.display = "none"), editArea)}
              className="liElement"
            >
              {todo.todo}
            </li>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
