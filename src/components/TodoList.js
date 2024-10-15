import React from 'react'
import TodoCard from './TodoCard';

function TodoList (props) {
  const tab = props.tabActive;
  const filterTodosList = tab === 'All' ?
    props.todos : 
    tab === 'Completed' ?
    props.todos.filter(val => val.complete) :
    props.todos.filter(val => !val.complete)

      console.log(filterTodosList)

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