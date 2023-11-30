import React, { useState } from 'react';
import TodoList, { Todo } from './TodoList';


export default function TodoItem({ todo, onDelete, onToggle }: { todo: Todo, onDelete: (todo: Todo) => void, onToggle: (todo: Todo) => void }) {
    return (
        <>
            <li key={todo.id}>
                {
                    todo.seen ?
                        <del>{todo.content}{' '}</del>
                        : <span>{todo.content}{' '}</span>
                }

                <button onClick={() => {
                    onDelete(todo);
                }}> DELETE</button>

                <input
                    type="checkbox"
                    checked={todo.seen}
                    onChange={e => {
                        onToggle(todo);
                    }}
                />
            </li>

        </>
    );

}