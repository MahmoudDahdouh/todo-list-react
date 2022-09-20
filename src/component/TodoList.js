import React from 'react'

function TodoList({ todos, deleteTodo }) {
    return <React.Fragment >
        {todos.map((todo, index) =>
            <p key={todo.id}>{todo.title} <span onClick={() => deleteTodo(todo.id)}>&times;</span></p>
        )}
    </React.Fragment>
}

export default TodoList