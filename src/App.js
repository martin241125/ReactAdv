import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import TodoButton from "./components/TodoButton";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <TodoButton />
    </div>
  );
}

export default App;
