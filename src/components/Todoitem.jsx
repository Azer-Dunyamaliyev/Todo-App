import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
const Todoitem = ({ todo , toggle , deleteTodo }) => {
  return (
    <div className='w-full flex bg-transparent p-2 py-4 justify-between items-center gap-2 border-b border-[#EEEDEB] pb-4 cursor-pointer select-none'
    onClick={()=> toggle(todo.id)}>
        {
            todo.isComplete ? (<FaRegCheckCircle />) : (<FaRegCircle />)
        }
        <p className={`flex-1 tracking-wide leading-tight ${todo.isComplete ? "line-through" : ""}`}>{todo.text}</p>
        <FaRegTrashAlt className='text-[#EE4E4E] size-5 hover:scale-110 transition-all' onClick={()=>deleteTodo(todo.id)}/>
    </div>
  )
}

export default Todoitem