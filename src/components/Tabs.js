import React from 'react'

function Tabs(props){
    const tabs= ['All', 'Open', 'Completed']

  return (
    <nav className='border-b border-gray-200 shadow-sm'>
        {tabs.map((tab, index)=> {
            const numOfTasks = tab === 'All' ?
                props.todos.length : 
                tab === 'Open' ?
                props.todos.filter(val => !val.complete).length :
                props.todos.filter(val => val.complete).length;
            return(
                //dark:hover:border-b-sky-600
                <button key={index} className={`p-4 mx-2 sm:text-xl font-medium hover:border-b-2  hover:border-b-sky-300 hover:pb-[14px] cursor-auto`}>
                    <h4 className='hover:text-sky-300 !cursor-pointer duration-200'>{tab} <span className='text-gray-400'>({numOfTasks})</span></h4>
                </button>
            )
        })}
    </nav>
  )
}

export default Tabs