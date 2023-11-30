import React, { useState } from 'react';
import TodoList, { Todo } from './TodoList';


export default function TodoItem({ todo, onDelete }: { todo: Todo, onDelete: (todo: Todo) => void }) {

    return (
        <>
            <li key={todo.id}>
                {todo.content}{' '}
                <button onClick={() => {
                    onDelete(todo);
                }}> DELETE</button>
            
            </li>

        </>
    );

}