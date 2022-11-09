import React from "react";
import Todo from "./Todo";
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

export default function Todos({ list, setList }) {
  const handleCheckbox = (event) => {
    if (event.target.style.Textdecoration) {
      //div.target.style.removeProperty("text-decoration");
    } else {
      //div.target.style.setProperty("text-decoration", "line-through");
    }
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

  /* const temp = list.map((todo) => (
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
  )); */

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {list.map((todo) => (
          <Todo todo={todo} setList={setList} list={list} />
        ))}
      </ul>
    </div>
  );
}
