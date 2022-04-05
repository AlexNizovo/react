import react, {useContext, useState} from "react";
import PropTypes from "prop-types";
import { findByLabelText } from "@testing-library/react";
import Context from "./context";
import AddTodo from "./inpText";
import TodoList from "./todoList";


const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem',
      textAlign: 'justify',
      marginRight: '.7 rem'
    },
    input: {
      marginRight: '1rem',
      
    },
   
  }


function TodoItem ({todo, onToggle, onRename}) {
    const {removeTodo} = useContext(Context)

    const classes =[]

    if(todo.completed) {
        classes.push('done')
    }


    return(
        <li style ={styles.li} >
            <span>
                <input 
                type='checkbox' 
                checked={todo.completed}
                style={styles.input} 
                onChange={ ()=> onToggle(todo.id)}/>
            </span>
                <span className={classes.join(' ')}>{todo.title}</span>     
                <span style={{marginLeft: '.9rem', display:'flex'}}>
                    <button onClick={() =>onRename(todo.title, todo.id,todo.completed)}>Редактировать</button>
                    <button onClick={removeTodo.bind(null, todo.id) }>&times; </button>
                </span>
        </li>
    ) 
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired, 
    onRename: PropTypes.func.isRequired,
}

export default TodoItem