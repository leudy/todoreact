import React,{useReducer, useEffect} from 'react'
import  {todoReducer} from './hooks/todoReducer'
import { ADD,UPDATE,DELETE,GET ,TOGGLE} from './hooks/Types'
import { useForm } from './hooks/useForm'
import { TodoList } from './TodoList'
import { AddTodo } from './AddTodo'

const init = () =>{

  return JSON.parse(localStorage.getItem('todos')) ||[];


// return [{
//     id: new Date().getTime(),
//     desc:'Comprar leche',
//     done:false},
//     ]

}


// const initialState = [{
// id: new Date().getTime(),
// desc:'Comprar leche',
// done:false},
// ]
export const TodoApp = () => {
    
   const [todos,dispatch] = useReducer(todoReducer, [],init);
   useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
   },[todos])

  
    const handleToggle =(id)=>{
        dispatch({
            type:TOGGLE,
            payload:id
        });
    }

   const handleDelete = (id) =>{
       console.log()
    const action ={
        type: DELETE,
        payload:id
    };
    dispatch(action);
    
   }
    const handleAdd = (newtodo) =>{
        dispatch({ type:ADD , payload:newtodo  });
    }
    
    return (
        <div className="container">
            <h1>Todo App  ({todos.length})</h1>
            <hr/>
            <div className="row" style={{marginBottom:"10px"}}>
             <AddTodo handleAdd={handleAdd} ></AddTodo>
            </div>      
            <div className="col-md-12" >
            <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}></TodoList>
            </div>
           
            
        </div>
    )
}
