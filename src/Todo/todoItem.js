import react, {useState} from "react";
import PropTypes from "prop-types";
import AddTodo from "./inpText";
import TodoList from "./todoList";
import Modal from "../modal/modal";
import "./todo.css";





function TodoItem ({todo, onToggle, onRename, onRemoveTodo,}) {


    const[activeModal, setActiveModal] = useState(false) // на открытие и закртие модалки
   
        function handlNameChange(name) {
            onRename(todo.title, todo.id,name)
        }
        

    return(
        <li>
            <span>
                <input 
                type='checkbox' 
                checked={todo.completed}
                onChange={ ()=> onToggle(todo.id)}/>
            </span>
                <span className={todo.completed ? 'done' : null}>{todo.title}</span>     
                <span className='sp'>
                    <button onClick={()=> setActiveModal(true)}>Редактировать</button>
                    <button className='delete' onClick={() => onRemoveTodo(todo.id) }>&times; </button>
                </span>
                <Modal 
                    active={activeModal} 
                    setActive={setActiveModal} 
                    onCreate={handlNameChange}
                    title={todo.title}
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