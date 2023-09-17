import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import TodoButton from "./components/TodoButton";
import TodoItem from "./components/TodoItem";

function App() {

  const totalTodos = [{
    tarea: 'Cortar Cebolla', completed: true
  },
  {
    tarea: 'Barrer la cocina', completed: true
  },
  {
    tarea: 'Bañar a josefina', completed: false
  },
  {
    tarea: 'Limpiar el baño', completed: true
  },
  {
    tarea: 'reparar PC', completed: true
  },
  {
    tarea: 'Cambiar driver PC', completed: true
  }]
  return (
    <div className="App">
      <TodoCounter completed={12} total={15} />
      <TodoSearch />

      <TodoList>
       {totalTodos.map(todo => (
        <TodoItem 
        key={todo.tarea} 
        tarea={todo.tarea}
        completed={todo.completed} />
       ))}
      </TodoList>
      <TodoButton />
    </div>
  );
}

export default App;
