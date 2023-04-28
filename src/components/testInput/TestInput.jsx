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

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    setTodos([...todos, { id: Date.now(), text: newTodo }]);

    setNewTodo("");
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="container">
      <h1 className="title">Add User</h1>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="FirstName"
          value={newTodo}
          onChange={handleTodoChange}
        />
        <input className="input" type="text" placeholder="LastName" />
        <input className="input" type="text" placeholder="UserName" />
        <input className="input" type="number" placeholder="Age" />
        <input className="input" type="number" placeholder="Salary" />
        <button className="btn" type="submit">
          Submit
        </button>
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
