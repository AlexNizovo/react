import react from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'

const styless = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}
function TodoList (props) {
    return (  
        <ul style={styless.ul}>
            {props.todos.map( todo => { 
                return <TodoItem 
                todo={todo} 
                key={todo.id} 
                onChange={props.onToggle}/>
            })}
        </ul> 
        
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default TodoList