import React, { useState } from 'react'

// css
import './AddTodo.css'

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('')

    // on title change
    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const addTitle = (event) => {
        event.preventDefault()
        if (title) {
            addTodo(title)
            setTitle('')
        }
    }

    return <section className='section-add-todo'>
        <form >
            <input className='input-add-todo' type="text" name="title" id="title" placeholder="Add new todo ..." onChange={onTitleChange} value={title} />
            <button className='btn opacity-ef btn-add-todo' type="submit" onClick={addTitle}>Add</button>
        </form>
    </section>
}

export default AddTodo