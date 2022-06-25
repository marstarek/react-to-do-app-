import React,{useState} from 'react'
import TodoForm from './Todoform';
import { BsFillPencilFill,BsFillXCircleFill } from "react-icons/bs";
function Todo({todos,completeTodo,removeTodo,updateTodo}) {
     const [edit, setEdit] = useState({
          id: null,
          value: ''
     })
     const submitUpdate = (value) => {
          updateTodo(edit.id, value);
          setEdit({
               id: null,
               value: ''
          })
     }
     if (edit.id) {
          return <TodoForm edit={edit} onSubmit={submitUpdate } />
     }
     return todos.map((todo, index) => (
         
          
          <div className={todo.isCompleted ? 'todo-row complete px-5' : 'todo-row px-5'} key={index}>
               <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
               </div>
               <div className='icons'>
                    <BsFillXCircleFill onClick={()=>removeTodo(todo.id) }  className='delete-icon'/>
               <BsFillPencilFill onClick={()=>setEdit({id:todo.id,value:todo.text}) }  className='ed-icon'/>
               
               
               </div>
          </div>
          
         
       
  ))
}

export default Todo
