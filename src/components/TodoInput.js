import React from 'react'
import { FaPlus } from "react-icons/fa6";

function TodoInput () {
  return (
    <div>
        <input type='text'/>
        <button>
          <FaPlus />
        </button>
    </div>
  )
}

export default TodoInput