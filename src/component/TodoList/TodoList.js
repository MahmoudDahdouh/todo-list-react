import React from 'react'
// css
import './TodoList.css'
function TodoList({ todos, deleteTodo }) {
    return <React.Fragment >
        {todos.map((todo, index) =>
            <div className="todo-item" key={todo.id}>
                <p className='todo-title'>{todo.title}</p>
                <div className='btn-delete-todo opacity-ef' onClick={() => deleteTodo(todo.id)}>&times;</div>
            </div>
        )}
        <button></button>
    </React.Fragment>
}

export default TodoList