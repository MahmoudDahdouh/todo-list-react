import React from 'react'
import AddItem from './component/AddItem'
import TodoList from './component/TodoList'
import todos from './data/todos'
function App() {
  return (
    <main>
      <div className="container">
        <h1 className="title">Todo list</h1>
        <p className='sub-title'><span>{todos.length}</span> {todos.length > 1 ? 'Todos' : 'Todo'}</p>

        <AddItem />
        <TodoList todos={todos} />

      </div>

      {/* Clear all Todos */}
      <button className="btn btn-fw">Clear all Todos</button>
    </main>
  )
}

export default App