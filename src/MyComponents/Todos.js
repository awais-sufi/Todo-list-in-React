import React from 'react'
import {Todoitems} from "./Todoitems";

export const Todos = (props) => {
  return (
    <div className="container">
        <h3 className='my-3'>Todos list</h3>
        {props.todos.length===0? "No todos to Dispaly":
       props.todos.map((todo)=>{
        return <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
       })
      }
    </div>
  )
}
