    import React from 'react'
import { useForm } from './hooks/useForm';
    
    export const AddTodo = ({handleAdd}) => {
        const [{description},handleInputChange,reset] =  useForm({ description:''  });
        const handleSubmit =(f)=>{
            f.preventDefault();
            const newTodo ={
                id: new Date().getTime(),
                desc:description,
                done:false
            };
        handleAdd(newTodo);
        reset();
        }


        return (
            <>
                 <div className="col-md-12 form-inline">
                  <form onSubmit={handleSubmit}>
                       <input placeholder="Descripcion" type="text" name="description"
                        value={description} onChange={handleInputChange} className="form-control"
                         style={{width:"400px" }}></input> 
                         
                         <button className="btn btn-outline-primary" style={{marginLeft:"5px"}} type="submit" >Agregar</button>
                  </form>
                 
              </div>
            </>
        )
    }
    