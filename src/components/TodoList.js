import React from 'react'
import TodoCard from './TodoCard';

function TodoList (props) {
  const tab = 'All'
  const filterTodosList = tab === 'All' ?
      props.todos : 
      tab === 'Comleted' ?
      props.todos.filter(val => val.complete) :
      props.todos.filter(val => !val.complete);


  return (
    <>
        {filterTodosList.map((todo, index)=> {
            return (
                <TodoCard key={index} todo={todo} />
            )
        })}
    </>
  )
}

export default TodoList;