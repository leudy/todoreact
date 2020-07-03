import {ADD,UPDATE,GET,DELETE, TOGGLE} from './Types'

export const todoReducer = (state=[],action) => {
 switch (action.type) {
        case ADD: 
          return [...state,action.payload]
        break;
        case DELETE: 
          return [...state.filter(f=>f.id !== action.payload     )]
        break;
        case TOGGLE:
          return state.map(
              todo =>
              (todo.id === action.payload)
              ? {...todo,done:!todo.done}
              : todo
           )
        break;
        // case TOGGLE:
        //    return state.map( todo =>{
        //                 if(todo.id === action.payload)
        //                 {
        //                     return {...todo,done:!todo.done}
        //                 }else{
        //                     return todo;
        //                 }
        //    });
        // break;
        case GET: break;
        case UPDATE: break;
     default:
         return [state];
 }

}
