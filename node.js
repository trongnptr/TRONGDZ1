import React, { useState } from 'react';

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {todo.text}
    </li>
  );
}

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  const handleToggle = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  );
}

export default App;