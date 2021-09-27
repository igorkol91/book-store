import React from "react";

export const InputButton = ({submitTodoHandler}) => {
    return (
        <button onClick={submitTodoHandler} type="submit">Submit</button>
    )
}