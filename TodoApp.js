import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";

class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
            this.setState(prevState => {
                const updatedToDos = prevState.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
                return {
                    todos : updatedToDos
                }
            })
    }

    render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={todo.id} item={item}
        handleChange={this.handleChange} />)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
    }
}
export default TodoApp