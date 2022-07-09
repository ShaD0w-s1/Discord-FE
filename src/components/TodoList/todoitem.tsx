/*
 * Author: zhangyuxuan
 * Date: 2022-05-14 01:23:37
 * LastEditTime: 2022-05-14 21:38:30
 * LastEditors: zhangyuxuan
 * FilePath: \my-app\src\components\todoitem.tsx
 */

export interface TodoItemProps {
  id: number;
  value?: String;
  onDelete?: (id: number) => void;
}

export default function TodoItem(props: TodoItemProps) {
  const { value } = props;
  const handleClick = () => {
    const { id, onDelete } = props;
    onDelete && onDelete(id);
  };
  return (
    <>
      <div>{value}</div>
      <button onClick={handleClick}>删除</button>
    </>
  );
}
