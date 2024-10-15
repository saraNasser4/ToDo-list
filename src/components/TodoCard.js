import React from 'react'


function TodoCard ({ todo }) {
  
  const btnsStyle = 'mr-4 my-2 px-6 py-1.5 rounded-2xl text-white'

  return (
    <div className="bg-gray-200 mx-2 my-4 rounded-md p-2 font-[500] max-w-[650px]">
      <p className='md:text-xl'>{todo.input}</p>
      <div>
            <button disabled={todo.complete} className={`${btnsStyle} bg-sky-500 disabled:bg-sky-300 disabled:cursor-not-allowed`}>
              <h6>Done</h6>
            </button>
            <button className={`${btnsStyle} bg-purple-300`}>
              <h6>Delete</h6>
            </button>
      </div>
        
    </div>
  )
}

export default TodoCard