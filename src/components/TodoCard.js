import React from 'react'

//key={index} todoIndex={index} todo={todo}

function TodoCard ({ todoIndex, todo }) {
  const btnsMass =['Done', 'Delete']
  return (
    <div className="bg-gray-200 mx-2 my-4 rounded-md p-2 font-[500] max-w-[650px]">
      <p className='md:text-xl'>{todo.input}</p>
      <div>
        {btnsMass.map((btn, ind)=> {
          return (
            <button key={ind} className='mr-4 my-2 px-6 py-1.5 rounded-2xl first:bg-sky-300 text-white last:bg-purple-300'>
              <h6>{btn}</h6>
            </button>

          )
        })}
      </div>
        
    </div>
  )
}

export default TodoCard