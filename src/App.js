import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [tabActive, setTabActive] =useState('Open')
  
  const handleAddTask = (newTask)=> {
    const newTodoList = [...todos, { input: newTask, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  const handleCompleteTodo = (index)=> {
    let newTodoList = [...todos]
    let completedTodo = todos[index] 
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  
  const handleDeleteTodo = (index)=> {
    let newTodoList = todos.filter((_ , valIndex)=> valIndex !== index)
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  const handleSaveData = (currTodos)=> {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }
  
  useEffect(()=> {
    if(!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])
  
  return (
    <div className="max-w-[650px] lg:mx-auto m-4">
      <Header todos={todos.length} />
      <Tabs tabActive={tabActive} setTabActive={setTabActive} todos={todos} />
      <TodoInput handleAddTask={handleAddTask}/>
      <TodoList tabActive={tabActive} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </div>
  );
}

export default App;
