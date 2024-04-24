// import React, {useState}  from "react";
// import './Header.css';
// const TodoList=()=>{
// const[todo,setTodo]=useState([]);
// const [value, setValue] = useState('');
// const [editing, setEditing] = useState(null);


// const changeIn=event=>{
//     setEditing(event.target.value);
// };
// const addTodo=()=>{
//     if(value.trim()!==''){
//         if(editing!==null){

//             const addTodo = () => {
//                     if (value.trim() !== '') {
//                       if (editing !== null) {
//                         // Update existing todo
//                         const updated = [...todo];
//                         updated[editing] = { id: updated[editing].id, text: value };
//                         setTodo(updated);
//                         setEditing(null);
//                       } else {
//                         // Add new todo
//                         setTodo(prevTodos => [
//                           ...prevTodos,
//                           { id: Date.now(), text: value }
//                         ]);
//                       }
//                       setValue('');
//                     }
//                   };
//                   const editTodo = index => {
//                         setValue(todo[index].text);
//                         setEditing(index);
//                       };
//                         const deleteTodo = index => {
//     const updatedTodo = todo.filter((todo, i) => i !== index);
//     setTodo(updatedTodo);
//   };
//   const clearTodos = () => {
//         setTodo([]);
//       };
//       return (
//             <div className="todo-container">
//               <h2>Todo List</h2>
//               <input
//                 type="text"
//                 value={value}
//                 onChange={changeIn}
//                 placeholder="Enter a new todo"
//               />
//               <button onClick={addTodo}>{editing !== null ? 'Update Todo' : 'Add Todo'}</button>
//               <button onClick={clearTodos}>Clear All</button>
//               <ul>
//                 {todo.map((todo, index) => (
//                   <li key={todo.id}>
//                     {todo.text}
//                     <button onClick={() => editTodo(index)}>Edit</button>
//                     <button onClick={() => deleteTodo(index)}>Delete</button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           );
//         };                
// }
// }
// }
// export default TodoList;