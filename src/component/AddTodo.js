import React, { useState } from 'react'

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('')

    // on title change
    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const addTitle = () => {
        if (title) {
            addTodo(title)
            setTitle('')
        }
    }

    return <React.Fragment>
        <input type="text" name="title" id="title" placeholder="Add new todo ..." onChange={onTitleChange} value={title} />
        <button className='btn' type="submit" onClick={addTitle}>Add</button>
    </React.Fragment>
}

export default AddTodo