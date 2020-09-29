import React, { useEffect, useState } from "react";
import "./App.scss";
//import TodoList from "./TodoList/index.jsx";
import "./components/ColorBox/colorBox.scss";
import PostList from "./PostList/index.jsx";
import Pagination from "./Pagination/index.jsx";
import queryString from "query-string";
//import TodoForm from "./TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Đặng Thị Diễm Thúy" },
    { id: 2, title: "Trần Ái Văn" },
    { id: 3, title: "Nguyễn Thị Thảo" },
  ]);
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 12,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const url = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

        const responseJson = await (await fetch(url)).json();
        //console.log(responseJson);
        const { data, pagination } = responseJson;
        setPosts(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list: " + error.message);
      }
    }
    fetchPostList();
  }, [filters]);
  function handlePageChange(newPage) {
    console.log("New page: " + newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  function handleTodoList(todo) {
    const newIndex = todoList.findIndex((x) => x.id === todo.id);
    if (newIndex < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(newIndex, 1);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", newTodoList);
  }
  function handleTodoForm(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <h3>React-hooks PostList</h3>
      <PostList posts={posts} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      {/* <TodoForm onSubmit={handleTodoForm} />
      <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}
    </div>
  );
}
export default App;
