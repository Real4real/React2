import React from "react";

import TodoListItemClass from './todo-list-item.jsx';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant}) => {
        const elements = todos.map((item) =>{
        const {id, ...itemProps} = item;
        return (
            <li className="mdl-list__item" key={id}>
                <TodoListItemClass
                    {...itemProps }
                    onDeleted={()=> onDeleted(id)}
                    onToggleDone={()=> onToggleDone(id)}
                    onToggleImportant={()=> onToggleImportant(id)}
                />
            </li>
        );
    });

    return (
        <ul className="demo-list-item mdl-list">
            {elements}
        </ul>
    );
};

export default TodoList;