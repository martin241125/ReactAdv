import React from 'react'
import './style/TodoList.css'

const TodoList = (props) => {
  return (
    <div className='container-ul'>
     <ul>
       {props.children}
     </ul>

    </div>
  )
}

export default TodoList