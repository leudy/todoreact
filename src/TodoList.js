import React from 'react'
import PropTypes  from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos,handleToggle,handleDelete}) => {
    return (
        <div className="list-group list-group-flush">
        {todos.map((t,i)=>( 
               <TodoItem todo={t} key={t.id}  idx={i} handleToggle={handleToggle}  handleDelete={handleDelete}  ></TodoItem>
             ))}
    </div>
    )

}

TodoList.propTypes={
    todos: PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired,
    handleToggle:PropTypes.func.isRequired
}

