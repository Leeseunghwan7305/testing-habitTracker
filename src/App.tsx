import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Nav from "./components/nav";
import Input from "./components/Input";
import Middle from "./components/Body";

export interface Todo {
  id: number;
  hi: string;
  count: boolean;
}
function App() {
  const [todo, setTodo] = useState<Todo[]>([
    { id: 1, hi: "잠자기", count: false },
  ]);

  const [allCount, setAllCount] = useState(0);

  useEffect(() => {
    setAllCount(todo.filter((v) => v.count).length || 0);
  }, [todo]);

  const addTodo = useCallback((add: string) => {
    const getTodo = {
      id: Number(new Date()),
      hi: add,
      count: false,
    };
    setTodo([getTodo, ...todo]);
  }, []);

  const changeCount = useCallback((index: number) => {
    const toggleTodo = todo.map((v, i) =>
      i == index ? { ...v, count: !v.count } : v
    );
    setTodo(toggleTodo);
  }, []);

  const deleteTodo = useCallback((index: number) => {
    const deleted = todo.filter((v, i) => {
      return i != index ? v : null;
    });
    setTodo(deleted);
  }, []);

  return (
    <div className="App">
      <Nav todo={todo} allCount={allCount} />
      <Input addTodo={addTodo} />
      <Middle todo={todo} changeCount={changeCount} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
