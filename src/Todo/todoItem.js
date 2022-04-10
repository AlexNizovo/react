import react, {useState} from "react";
import PropTypes from "prop-types";
import AddTodo from "./inpText";
import TodoList from "./todoList";
import Modal from "../modal/modal";


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


function TodoItem ({todo, onToggle, onRename, onRemoveTodo,}) {

    const classes =[]

    if(todo.completed) {     // зачеркивает текст , если поставили флажок 
        classes.push('done')
    }

    const[activeModal, setActiveModal] = useState(false) // на открытие и закртие модалки

        const[name,setName] = useState('')  // input в модалке
        function handlNameChange(name) {
            setName(name)
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
                    <button onClick={()=> setActiveModal(true)}>Редактировать</button>
                    <button className='delete' onClick={() => onRemoveTodo(todo.id) }>&times; </button>
                </span>
                <Modal 
                    active={activeModal} 
                    setActive={setActiveModal} 
                    onRename={() => onRename(todo.title, todo.id,name)} 
                    onChange={handlNameChange}
                    nameT={todo.title}
                    />

        </li>
    ) 
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired, 
    onRename: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoItem