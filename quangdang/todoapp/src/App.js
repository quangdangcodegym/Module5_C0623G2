import { useState } from 'react';
import './App.css';
import TodoApp from './nonapitodoedit/TodoApp';

function App() {
  const [data, setData] = useState([]);

  return (
    <TodoApp />

  );
}

export default App;
