import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";

function TodoApp() {
    const todoItems = todosData.map(item => <TodoItem key={todo.id} item={item} />)
        
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}
export default TodoApp