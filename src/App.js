import React, { useState } from "react";
import Modal from "./modal/modal";
import AddTodo from "./Todo/inpText";
import TodoList from './Todo/todoList';
import './index.css'



function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: 'масло'},
    {id:2, completed: false, title: 'хлеб'},
    {id:3, completed: false, title: 'киви'},
  ]
  )
 
  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) { //удаляет todo
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  function addTodo(title) { //добавляет todo
      setTodos(todos.concat([
      {
        title,
        completed: false,
        id: Date.now()
      }
    ]))
  }
  
  function renameTodo (title, id, name) {  // редактирует
    const newTitle = todos.map((todos) => ({
      ...todos,
      title: todos.id === id ? name : todos.title
    }));
    setTodos(newTitle)
  }


  return (
    <div className="App">
      <h1>Список дел</h1>
      <AddTodo  onCreate={addTodo} />
      {todos.length ? <TodoList  
          todos={todos}  
          onToggle={toggleTodo} 
          onRename={renameTodo}
          onRemoveTodo={removeTodo}
          /> : <p>Нет запланированных дел</p>
      }     
    </div>
    
  );
}

export default App;
