import React from 'react'
import './style/TodoSearch.css'

const TodoSearch = ({search, setSearch}) => {

  return (
      <div className='container-input'>
        <input 
        type="text"
        value={search}
        onChange={(e)=> {
          setSearch(e.target.value)
        }}  />

      </div>
    
  )
}

export default TodoSearch