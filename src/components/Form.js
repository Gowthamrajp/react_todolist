import React from 'react'
//import TodoList from './TodoList';

function Form({inputText, setInputText,todos,setTodos,setStatus}) {
  function inputTextHandler(e){
    //console.log(e.target.value);
    setInputText(e.target.value)
  }  
  function submitTodoHandler(e){
    e.preventDefault();
    if(inputText!==''){
    setTodos([...todos,{text:inputText,completed:false,id:Math.floor(Math.random()*1000)}]);
    setInputText("");
    }else
    alert("Sorry I cannot add an empty TODO");
  }
  const statusHandler = (e)=>{
    setStatus(e.target.value);
  }
  
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button  onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form