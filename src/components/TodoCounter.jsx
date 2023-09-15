import React from 'react'

const TodoCounter = ({total, completed}) => {
  return (
    <>
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    </>
  )
}

export default TodoCounter