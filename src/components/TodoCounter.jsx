import React from 'react'
import './style/TodoCounter.css'

const TodoCounter = ({total, completed}) => {
  return (
    <div className='container'>
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    </div>
  )
}

export default TodoCounter