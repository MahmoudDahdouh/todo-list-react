import React, { useState } from 'react'
import AddItem from './component/AddItem'
import TodoList from './component/TodoList'
import data from './data/todos'
function App() {
  const [todos, setTodos] = useState(data)

  // delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <main>
      <div className="container">
        <h1 className="title">Todo list</h1>
        <p className='sub-title'><span>{todos.length}</span> {todos.length > 1 ? 'Todos' : 'Todo'}</p>

        <AddItem />
        <TodoList todos={todos} deleteTodo={deleteTodo} />

      </div>

      {/* Clear all Todos */}
      <button className="btn btn-fw" onClick={() => setTodos([])}>Clear all Todos</button>
    </main>
  )
}

export default App