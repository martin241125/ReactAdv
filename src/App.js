import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import TodoButton from "./components/TodoButton";
import TodoItem from "./components/TodoItem";
import { useState } from "react";


const todosEj = [{
  tarea: 'Bañar a josefina',
  completed: true
},
{
  tarea: 'limpiar el piso',
  completed: false
},
{
  tarea: 'Barrer antes de limpiar el piso',
  completed: false
}
]

function App() {
  const [todos, setTodos] = useState(todosEj)
  const [search, setSearch] = useState('');

  const completedTodo = todos.filter(todo => !!todo.completed).length
  const total = todos.length
  

  return (
    <div className="App">
      <TodoCounter completed={completedTodo} total={total} />
      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.tarea}
            tarea={todo.tarea}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <TodoButton />
    </div>
  );
}

export default App;
