import React, { useState } from "react";
import "./App.scss";
import TodoList from "./TodoList/index.jsx";
import "./components/ColorBox/colorBox.scss";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Đặng Thị Diễm Thúy" },
    { id: 2, title: "Trần Ái Văn" },
    { id: 3, title: "Nguyễn Thị Thảo" },
  ]);
  function handleTodoList(todo) {
    const newIndex = todoList.findIndex((x) => x.id === todo.id);
    if (newIndex < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(newIndex, 1);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", newTodoList);
  }
  return (
    <div className="App">
      <h3>Phan Cảnh Lộc</h3>
      <TodoList todos={todoList} onTodoClick={handleTodoList} />
    </div>
  );
}
export default App;
