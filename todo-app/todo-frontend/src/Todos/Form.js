import React, { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [text, setText] = useState('')

  const onChange = ({ target }) => {
    setText(target.value)
    console.log(text)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
 
    createTodo({ text })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit"> Submit </button>
    </form>
  )
}

export default TodoForm
