import React,{useState} from 'react'
import TodoForm from './Todoform'
import Todo from './Todo';
function TodoList() {
     const [todos, setTodos] = useState([]);
     const addTodo = (todo) => {
          if (!todo.text || /^\s*$/.test(todo.text)) {
               return
          }
          const newTodos = [todo, ...todos]
          setTodos(newTodos)
          console.log(...todos);
     }
     const completeTodo = (id) => {
          let updateedtodo = todos.map(todo => {
               if (todo.id===id) {
                    todo.isCompleted=! todo.isCompleted
               }
               return todo
          })
          setTodos(updateedtodo)
     }
     const removeTodo = (id) => {
          const removeArr = [...todos].filter(todo => todo.id !== id);
          setTodos(removeArr)
          console.log(id);

     }
     const updateTodo = (todoId, newvalue) => { 
          console.log("fff");
          if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
               return
          }
setTodos(prev=>prev.map(item=>(item.id===todoId?newvalue:item)))
     }
  return (
       <div>
       <h1>what,s the plan for to day </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={ updateTodo} />
       
       
       
       
       </div>
  )
}

export default TodoList