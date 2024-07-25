import React, { useEffect ,useRef ,useState } from "react";
import { GoListUnordered } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import Todoitem from './Todoitem';

export const Todo = () => {

  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem("todos")) : [] );
  const data = useRef();

  const todoRef = () => {
    const inputText = data.current.value.trim();
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: todos.length + 1, 
      text: inputText,
      isComplete: false
    };

    setTodos((prev) => [...prev, newTodo]);

    data.current.value = "";
  };

  const toggle = (id)=> {
    setTodos((prevTodos)=> {
      return prevTodos.map((todo)=> {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete}
        }
        return todo
      })
    })
  }

  const deleteTodo = (id)=> {
    setTodos((prevtodos) => {
      return prevtodos.filter((todo) => todo.id !== id)
    })
  }
  
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos]);

  
  return (
    <div className="place-self-center w-[450px] h-[600px] bg-[#93BFCF] rounded-lg p-12 flex flex-col gap-8">
      {/* Title */}
      <h1 className='text-3xl font-semibold tracking-wider flex items-center gap-3 text-[#000]'>
      <GoListUnordered />Todo App
      </h1>

      {/* Search */}

      <div className='flex items-center w-full bg-[#EEEDEB] rounded-md p-1.5'>
        <input ref={data} type="text" placeholder='Enter a new task' className='border-none outline-none p-1 flex-1 bg-transparent' />
        <FaPlus className='size-7 cursor-pointer' onClick={()=> todoRef()} />
      </div>

      {/* New tasks */}
      <div className='mt-8'>
        {
         todos.map((todo) => (
          <Todoitem todo = {todo} key={todo.id} toggle = {toggle} deleteTodo = {deleteTodo} />
         ))
        }
      </div>
    </div>
  )
}
