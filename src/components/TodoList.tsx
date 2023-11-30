import React, { ReactNode, useState } from 'react';
import TodoItem from './TodoItem';


{/* 
    <input /> 태그를 활용해 사용자로 부터 입력받은 리스트를 itemList에 담을것.
    setState를 활용하고, itemList에 담기는 객체는 Type을 참조할 것.

    itemList.map()을 사용하여 투두리스 렌더링
    TodoItem 컴포넌트를 렌더링할 것.

      조건
      1. TodoItem 컴포넌트에 삭제 버튼을 클릭 하면 해당 아이템이 지워진다.
      filter 또는 slice를 이용할 것.
      2. TodoItem 컴포넌트 왼쪽에 체크 표시를 누르면 완료된 취소선 표시를 한다.
      완료된컴포넌트는 <del></del>을 활용하여 조건부 렌더링을 활용할 것.
  */
}

const initialList = [
  { id: 1, content: "운동하기" },
  { id: 2, content: "살빼기" },
  { id: 3, content: "책읽기" }
]

export default function TodoList({ children }: { children: ReactNode }) {
  const [itemList, setItemList] = useState<{
    id: number;
    content: string;
  }[]>(initialList);


  const renderPlan = initialList.map((init) => {
    return (
      <TodoItem 
        id={init.id}
        content={init.content}
      />
    );
  })

  return (
    <>
      {renderPlan}
    </>
  )
} 