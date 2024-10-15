import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

function TodoInput (props) {
  const [value, setValue] = useState('');
  const handlerChange = (e)=> setValue(e.target.value)
  

  return (
    <div className='flex items-center max-w-[450px] m-4 gap-4'>
        <input 
          onChange={(e)=> handlerChange(e)}
          value={value}
          type='text' 
          placeholder='Enter your task body...'
          className='flex-1 px-3 py-2 border-gradient border-clip-padding outline-none caret-purple-500'
        />
        <button
          onClick={()=> {
            if (!value) {return}
            props.handleAddTask(value)
            setValue('')
          }}
          className='text-white p-[10px] rounded bg-purple-400 transition-all text-xl duration-150 hover:bg-purple-600'>
          <FaPlus />
        </button>
    </div>
  )
}

export default TodoInput