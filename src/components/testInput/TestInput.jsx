import { useState } from "react";
import "../testInput/testinput.scss";

const TestInput = () => {
  const [newTodo, setNewTodo] = useState("");

  const [todos, setTodos] = useState(() => {
    const storedTodo = localStorage.getItem("todos");
    return storedTodo ? JSON.parse(storedTodo) : [];
  });

  const handleTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="container">
      <form className="form">
        <input className="input" type="text" placeholder="FirstName" />
        <input className="input" type="text" placeholder="LastName" />
        <input className="input" type="text" placeholder="UserName" />
        <input className="input" type="number" placeholder="Age" />
        <input className="input" type="number" placeholder="Salary" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>User Detalis</h1>
        <div className="box">
          <ul className="list fname__list"></ul>
          <ul className="list lname__list"></ul>
          <ul className="list uname__list"></ul>
          <ul className="list age__list"></ul>
          <ul className="list salary__list"></ul>
        </div>
      </div>
    </div>
  );
};

export default TestInput;
