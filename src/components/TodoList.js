import React from 'react'
import TodoCard from './TodoCard';

function TodoList (props) {
    

  return (
    <>
        {props.todos.map((todo, index)=> {
            return (
                <TodoCard key={index} todoIndex={index} todo={todo} />
            )
        })}
    </>
  )
}

export default TodoList;