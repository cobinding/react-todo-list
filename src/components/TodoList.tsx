import { map } from 'jquery';
import React, { ReactNode, useState } from 'react';
import TodoItem from './TodoItem';

export interface Todo {
  id: number;
  content: string;
  seen: boolean;
}

const initialList: Todo[] = [
  { id: 1, content: "운동하기", seen: false},
  { id: 2, content: "살빼기", seen: false},
  { id: 3, content: "책읽기", seen: false},
];

let nextId = 4;

export default function TodoList({ children }: { children: ReactNode }) {
  const [itemList, setItemList] = useState<Todo[]>(initialList);

  const [text, setText] = useState('');

  const handleDelete = (todo: Todo) => {
    setItemList(
      itemList.filter( item =>
        item.id !== todo.id
      )
    );
  }

  const handleToggleCheck = (todo: Todo) => {
    setItemList(itemList.map(item => {
      if(item.id == todo.id) {
        return {...item, seen: todo.seen = !todo.seen };
      } else {
        return item;
      }
    }));
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
          {id: nextId++, content:text, seen:false}
        ])
      }>ADD</button>
      <ul>
        {itemList.map(item => (
          <TodoItem
            todo={item}
            onDelete={handleDelete}
            onToggle={handleToggleCheck}
          />
        ))}
      </ul>
    
    </>
  );
} 