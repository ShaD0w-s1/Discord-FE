/*
 * Author: zhangyuxuan
 * Date: 2022-05-14 01:23:46
 * LastEditTime: 2022-06-04 20:01:11
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\TodoList\todoinput.tsx
 */
import { SyntheticEvent, useState } from "react";

import { TodoItemProps } from "./todoitem";

export interface TodoInputProps {
  onAdd: (args: TodoItemProps) => void;
}

export default function TodoInput(props: TodoInputProps) {
  const {onAdd} = props
  const [value, setValue] = useState("");
  const handleChange = (e: SyntheticEvent) => {
    setValue((e.target as HTMLInputElement).value);
  };
  const handleClick = () => {
    onAdd({ id: Math.random(), value: value });
    setValue("");
  };
  return (
    <>
      <input type="text" onChange={handleChange} value={value}></input>
      <button onClick={handleClick}>提交</button>
    </>
  );
}
