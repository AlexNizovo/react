import React from "react";
import AddTodo from "./Todo/inpText";
import TodoList from './Todo/todoList';
import Context from "./Todo/context";


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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
        title,
        completed: false,
        id: Date.now()
      }
    ]))
  }
  
function renameTodo (title, id, completed) {
  let tiTle = prompt('редактируй',title)
  setTodos(todos.concat([
    {
      title: tiTle,
      completed,
      id
    }
  ]))
  

}


  return (
    <Context.Provider value={{removeTodo}}>
      <div className="App">
        <h1>Список дел</h1>
        <AddTodo  onCreate={addTodo} />
        {todos.length ? <TodoList  todos={todos}  onToggle={toggleTodo} onRename={renameTodo}/> : <p>Нет запланированных дел</p>}
      
      </div>
    </Context.Provider>
  );
}

export default App;
