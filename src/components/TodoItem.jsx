import React from 'react'

const TodoItem = (props) => {

  return (
    <div>
        <li>{props.text} <button type='submit' onClick={()=>{props.itemDelete(props.id)}
        }><span>Delete</span></button></li>
        
    </div>
  )
}

export default TodoItem