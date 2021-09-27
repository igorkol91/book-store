import React from "react";

export const DisplayBooks = ({todos, removeTodo}) => {

    const allTodos = todos.map(element => {
        return(<li key={element.id} id={element.id}>{element.name} <button onClick={removeTodo} type="button">X</button></li>)
     });
    return (
    <div>
        <h5>{allTodos}</h5>
    </div>
    )
}