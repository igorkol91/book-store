import React from "react";

export const Input = ({inputHandler, input}) => {
    return (
        <input onChange={inputHandler} id="input" placeholder="Book name" value={input}></input>
    )
}