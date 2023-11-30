import React, { useState } from 'react';
import TodoList from './TodoList';


export default function TodoItem({ id, content }: { id: number, content: string }) {

    return (
        <>
        <div>
            {id}
            {content}
        </div>
        </>
    );

}