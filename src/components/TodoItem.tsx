import React, { useState } from 'react';
import TodoList from './TodoList';


export default function TodoItem({ id, content, onDelete }: { id: number, content: string, onDelete: (id: number) => void }) {

    return (
        <>
            <li key={id}>
                {content}{' '}
                <button onClick={() => {
                    onDelete(id);
                }}> DELETE</button>
            
            </li>

        </>
    );

}