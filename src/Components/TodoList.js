import React, { useState } from 'react';

const TodoList = (props) => {

    const { toDoList } = props;

    return (
        <div>
            {toDoList.map(item => <p>{item}</p>)}
        </div>
    )
}

export default TodoList;