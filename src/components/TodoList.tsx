import { map } from 'jquery';
import React, { ReactNode, useState } from 'react';
import TodoItem from './TodoItem';


const initialList = [
  { id: 1, content: "운동하기" },
  { id: 2, content: "살빼기" },
  { id: 3, content: "책읽기" }
]

let nextId = 4;

export default function TodoList({ children }: { children: ReactNode }) {
  const [itemList, setItemList] = useState<{
    id: number;
    content: string;
  }[]>(initialList);

  const [text, setText] = useState('');

  const handleDelete = (id:number) => {
    setItemList(
      itemList.filter( item =>
        item.id !== id
      )
    );
  }

  // 입력된 데이터를 배열에 추가해서 렌더링
  return (
    <>
      <input type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() =>
        setItemList([
          ...itemList,
          {id: nextId++, content:text}
        ])
      }>ADD</button>
      <ul>
        {itemList.map(item => (
          <TodoItem
            id={item.id}
            content={item.content}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
} 