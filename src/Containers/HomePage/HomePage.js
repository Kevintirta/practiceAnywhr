import React, { useState } from 'react';
import TodoList from '../../Components/TodoList';

const HomePage = () => {
    const [text, setText] = useState("")
    const [toDoList, setToDoList] = useState([])

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = () => {
        const newToDoList = [...toDoList, text]
        setToDoList(newToDoList)
    }

    return (
        <div>
            <input type="text" onChange={handleTextChange}></input>
            <button onClick={handleSubmit}>Submit</button>
            <TodoList toDoList={toDoList} />
        </div>
    )
}

export default HomePage;