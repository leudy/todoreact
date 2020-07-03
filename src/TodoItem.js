import React from 'react'
import PropType from 'prop-types'
export const TodoItem = ({todo,handleToggle,handleDelete ,idx}) => {
    return (
        <li  key={todo.id}> 
        <div className="list-group-item row form-inline col-md-12 d-flex bd-highlight"> 
             
        <div className="col-md-9" style={{borderBlockColor:"red"}}>
             <p className={`${ todo.done && 'complete'  }`} onClick={ ()=> handleToggle(todo.id)  }>{idx+1}. {todo.desc}</p>
        </div>
         <div className="col-md-3 ">
              <a className="btn btn-outline-danger btn-sm" onClick={()=>{ handleDelete(todo.id)  }}>   <i className="fa fa-trash">   </i> </a>
             {/* <button className='btn btn-danger btn-sm' onClick={()=>{ handleDelete(todo.id)  }}>{"Borrar"}</button> */}
            </div>
        </div> 
        </li>
    )
}


TodoItem.propTypes ={
    todo:PropType.object.isRequired,
    handleDelete:PropType.func.isRequired,
    handleToggle:PropType.func.isRequired,
    idx: PropType.number.isRequired
}