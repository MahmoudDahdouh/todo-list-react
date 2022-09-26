import React, { useEffect, useState } from 'react'
import AddTodo from './component/AddTodo/AddTodo'
import NoTodos from './component/NoTodo/NoTodos'
import TodoList from './component/TodoList/TodoList'

// css
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  // get todos
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos)
    }
  }, [])

  // update
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // add Todo
  const addTodo = (title) => {
    console.log('this is me');
    console.log(todos.length);
    const todo = { id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1, title: title }
    setTodos(prev => [...prev, todo])
  }

  // delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <main>
      <div className="container">
        <h1 className="title">Todo list</h1>
        <p className='sub-title'><span className='todo-counter'>{todos.length}</span> {todos.length > 1 ? 'Todos' : 'Todo'}</p>

        <AddTodo addTodo={addTodo} />
        {todos.length > 0 ?
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          :
          <NoTodos />
        }
        <button className="btn opacity-ef btn-fw" onClick={() => setTodos([])}>Clear all Todos</button>
      </div>
      {/* Clear all Todos */}
    </main>
  )
}

export default App