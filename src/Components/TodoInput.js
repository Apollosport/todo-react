import React from "react";
import uuid from "react-uuid";
import { AiFillPlusCircle } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";

export default function TodosInput({ inputText, setInputText, list, setList }) {
  /* const clickPressHandler = () => {
    setTodo2(inputArea);
  }; */

  /* const handleSubmit = (e) => {
    e.preventDefault();
    const someObject = {
      //todo: inputArea,
      checkDone: false,
    };
    setList((todo) => [...todo, someObject]);
  }; */

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    if (inputText === "") {
      alert("Nothing to do? Really?");
      return;
    }
    //console.log("hallo ", list.find("hallo"));
    /* if (list.find(inputText)) {
      alert("Doing the same thing twice? Really?");
      return;
    } */
    setList([...list, { text: inputText, done: false, id: uuid() }]);
    setInputText("");
  };

  return (
    //<form onSubmit={handleSubmit}>
    <form>
      <h1>ToDo || !ToDo</h1>
      <input
        //type="text"
        //id="inputArea"

        className="inputArea"
        value={inputText}
        onChange={inputHandler}
        //onKeyDown={keyPressHandler}
        placeholder="What would you like to do?"
      />

      <button className="addButton" onClick={submitHandler}>
        <AiFillPlusCircle /> <CgAdd />
      </button>
    </form>
  );
}
