import React, {useState,useEffect,useRef} from 'react';
function TodoForm(props) {
     const [input, setInput] = useState('');
     const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
  

 
})


     const handelChange = (e) => {
          setInput(e.target.value)
     }
     const handelSubmit = (e) => {
          e.preventDefault();
          props.onSubmit({
               id: Math.floor(Math.random() * 10000),
               text:input
          })
          setInput('')
     }
     return(
          <div className='container py-5'>
               <form action="" className='  todo-form w-50 mx-auto' onSubmit={handelSubmit}>
                    <div className="form-floating mb-3">
                    <input type="text" placeholder=" add to do list" value={input} name='text'
                         className='form-control todo-input'
                              id="floatingInput"
                              onChange={handelChange}
                              ref={inputRef}
                    />
               <label htmlFor="floatingInput">add to do list</label>
               </div>
               <button className='btn btn-primary todo-button'> Add </button>
               </form> 
               </div>)
}
export default TodoForm;
