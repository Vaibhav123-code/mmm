import React, { useEffect, useState } from 'react';
import Note from './Component/Note/Note';
import './App.css'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({})
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  
  },[])

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setNewTodo({ title: '', content: '' });
  };
  
  const editTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  


  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className='heading'>Keep Note Clone</h1>
       <div className='input-container'>
       <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          className='input'
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <textarea
        className='input'
          placeholder="Content"
          value={newTodo.content}
          onChange={(e) => setNewTodo({ ...newTodo, content: e.target.value })}
        />
        <button onClick={() => addTodo(newTodo)} className='add-btn'><AddCircleRoundedIcon className='add-icon'/></button>
       </div>

      <div className='note'>
        {todos.map((todo, index) => (
          <Note
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(index)}
            onEdit={(updatedTodo) => editTodo(index, updatedTodo)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

