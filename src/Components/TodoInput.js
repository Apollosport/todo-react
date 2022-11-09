import React from "react";
import uuid from "react-uuid";
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
    setList([...list, { text: inputText, done: false, id: uuid() }]);
    setInputText("");
  };

  return (
    //<form onSubmit={handleSubmit}>
    <form>
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
        Add
      </button>
    </form>
  );
}
