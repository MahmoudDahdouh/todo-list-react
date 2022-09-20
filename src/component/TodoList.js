import React from 'react'

function TodoList({ todos }) {
    return <React.Fragment>
        {todos.map((todo) =>
            <p key={todo.id}>{todo.title}</p>
        )}
    </React.Fragment>
}

export default TodoList