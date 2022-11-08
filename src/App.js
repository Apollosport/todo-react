import React from "react";
import "./App.css";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <h1>ToDo or !ToDo</h1>
      <Todos />
      <ul></ul>
    </div>
  );
}

export default App;
