import React, { useState } from 'react';
import './Header.css';

const Todo= () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');

  const change = event => {
    setValue(event.target.value);
  };

  const addTodo = () => {
    if(value===""){
      console.log("add some input")
    }else{
 setTodo([...todo, { id: Date.now(), text: value }]);
    }
      setValue('');
  };

  const deleteTodo = index => {
    const updated = todo.filter((_, i) => i !== index);
    setTodo(updated);
  };

  const clearTodo = () => {
    setTodo([]);
  };
  return (
    <div className="container">
      <h2>Todo List</h2>
      <input type="text" value={value} onChange={change} placeholder="Enter a new todo"/>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodo}>Clear All</button>
      <ul>
        {todo.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div> 
  );
};
export default Todo;
