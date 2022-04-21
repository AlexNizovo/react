import react from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'

function TodoList (props) {
    return (  
        <ul>
            {props.todos.map( todo => { 
                return <TodoItem 
                todo={todo} 
                key={todo.id} 
                onToggle={props.onToggle}
                onRename={props.onRename}
                onRemoveTodo={props.onRemoveTodo}
                />
            })}
        </ul> 
        
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    onRename: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoList