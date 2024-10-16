import React from 'react'

function Tabs(props){
    const tabs= ['All', 'Open', 'Completed']
    
    return (
        <nav className='border-b border-gray-200 shadow-sm text-nowrap my-4'>
            {tabs.map((tab, index)=> {
                const numOfTasks = tab === 'All' ?
                    props.todos.length : 
                    tab === 'Open' ?
                    props.todos.filter(val => !val.complete).length :
                    props.todos.filter(val => val.complete).length;
            
                return(
                    <button 
                        onClick={()=> props.setTabActive(tab)}
                        key={index} 
                        className={`p-4 mx-2 sm:text-xl lg:text-2xl font-medium cursor-auto ${props.tabActive === tab ? 'border-b-2 border-b-sky-300 pb-[14px] text-sky-300' : ''}`}>
                        <h4 className='!cursor-pointer duration-200'>{tab} <span className='text-gray-400'>({numOfTasks})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}

export default Tabs