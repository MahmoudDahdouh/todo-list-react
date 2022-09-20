import React from 'react'

function AddItem() {
    return <React.Fragment>
        <form>
            <input type="text" name="title" id="title" placeholder="Add new todo ..." />
            <button className='btn' type="submit">Add</button>
        </form>
    </React.Fragment>
}

export default AddItem