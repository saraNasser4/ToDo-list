import React from 'react'


function TodoCard ({ todo, index, handleCompleteTodo, handleDeleteTodo }) {
  
  const btnsStyle = 'mr-4 my-2 px-6 py-1.5 rounded-2xl text-white transition-all duration-300'

  return (
    <div className="bg-gray-200 rounded-md p-2 sm:p-4 font-[500] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <p className='md:text-xl'>{todo.input}</p>
      <div>
            <button  onClick={()=> handleCompleteTodo(index)} disabled={todo.complete} className={`${btnsStyle} bg-sky-500 hover:bg-sky-300 disabled:bg-sky-300 `}>
              <h6>Done</h6>
            </button>
            <button  onClick={()=> handleDeleteTodo(index)} className={`${btnsStyle} bg-purple-500 hover:bg-purple-300`}>
              <h6>Delete</h6>
            </button>
      </div>
        
    </div>
  )
}

export default TodoCard