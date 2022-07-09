/*
 * Author: zhangyuxuan
 * Date: 2022-05-14 01:23:26
 * LastEditTime: 2022-05-14 21:31:52
 * LastEditors: zhangyuxuan
 * FilePath: \my-app\src\components\todolist.tsx
 */
import { useState } from "react";

import TodoItem, { TodoItemProps } from "./todoitem";
import TodoInput from "./todoinput";

export default function TodoList() {
  const [todoList, setTodoList] = useState([] as TodoItemProps[]);

  const handleAdd = (value: TodoItemProps) => {
    setTodoList([...todoList, value]);
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const listItems = todoList.map((item) => {
    const { id, value } = item;
    return (
      <TodoItem
        id={id}
        value={value}
        key={id}
        onDelete={handleDelete}
      ></TodoItem>
    );
  });

  return (
    <div className="todo-list">
      <TodoInput onAdd={handleAdd} />
      {listItems}
    </div>
  );
}
