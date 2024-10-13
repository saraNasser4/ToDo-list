import React from 'react'
import PropTypes from 'prop-types';

function Header (props){
    const taskOrTasks = props.todos !== 1 ? 'tasks' : 'task'

  return (
    <header>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-sky-300 text-transparent'>You have {props.todos} open {taskOrTasks}.</h1>
    </header>
  )
}

Header.propTypes = { todo: PropTypes.number }

export default Header