import React from 'react'
import TodoCard from './TodoCard';

function TodoList (props) {
  const tab = props.tabActive;
  const filterTodosList = tab === 'All' ?
    props.todos : 
    tab === 'Completed' ?
    props.todos.filter(val => val.complete) :
    props.todos.filter(val => !val.complete)

    

  return (
    <>
        {filterTodosList.map((todo, index)=> {
            return (
                <TodoCard key={index} index={props.todos.findIndex(val => val.input === todo.input)} todo={todo} {...props}/>
            )
        })}
    </>
  )
}

export default TodoList;