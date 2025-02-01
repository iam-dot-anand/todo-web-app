import React, { useState, useEffect } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Todo() {
  const [inputVal, setInputVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodo(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todo));
    }
  }, [todo]);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;

    if (edit) {
      setTodo(
        todo.map((currVal) =>
          currVal.id === editItemId ? { ...currVal, name: inputVal } : currVal
        )
      );
      setEdit(false);
    } else {
      const newTodo = { name: inputVal, id: uuidv4(), checked: false };
      setTodo((prevState) => [...prevState, newTodo]);
    }
    setInputVal("");
  };

  const deleteItem = (id) => {
    const updatedTodo = todo.filter((currVal) => currVal.id !== id);
    setTodo(updatedTodo);
  };

  const deleteAll = () => {
    setTodo([]);
  };

  const editItem = (id) => {
    const editingItem = todo.find((elem) => elem.id === id);
    setEdit(true);
    setInputVal(editingItem.name);
    setEditItemId(id);
  };

  const toggleChecked = (id) => {
    setTodo(
      todo.map((currVal) =>
        currVal.id === id ? { ...currVal, checked: !currVal.checked } : currVal
      )
    );
  };

  return (
    <div className="container mt-5 fst-italic">
      <div className="text-center">
        <h1 className="mb-4  text-black-50">to-do list</h1>
        <form className="input-group mb-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Add your todo"
            value={inputVal}
            onChange={handleInputChange}
          />
          <button className="btn btn-success" type="submit">
            {edit ? "Edit" : "Add"}
          </button>
        </form>
        <ul className="list-group">
          {todo.map((currVal) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={currVal.id}
              style={{
                textDecoration: currVal.checked ? "line-through" : "none",
              }}
            >
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={currVal.checked}
                  onChange={() => toggleChecked(currVal.id)}
                  className="me-2"
                />
                {currVal.name}
              </div>
              <div>
                <FiEdit
                  onClick={() => editItem(currVal.id)}
                  className="text-warning me-2 cursor-pointer"
                />
                <MdDelete
                  onClick={() => deleteItem(currVal.id)}
                  className="text-danger cursor-pointer"
                />
              </div>
            </li>
          ))}
        </ul>
        {todo.length > 0 && (
          <button className="btn btn-danger mt-3" onClick={deleteAll}>
            Delete All
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
