import { SyntheticEvent, useState } from "react";

import type { TodoItemProps } from "./todoitem";

import "./todoinput.css";

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
