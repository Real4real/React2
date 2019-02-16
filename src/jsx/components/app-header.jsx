import React from "react";

const AppHeader = ({toDo, done}) => {
    return (
        <div>
            <h1>My Todo List</h1>
            <h2>{toDo} to do, {done} is done</h2>
        </div>
    );
};

export default AppHeader;