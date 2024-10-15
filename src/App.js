import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [tabActive, setTabActive] =useState('Open')
  
  const handleAddTask = (newTask)=> {
    const newTodoList = [...todos, { input: newTask, complete: false}]
    setTodos(newTodoList)
  }

  const handleCompleteTodo = (index)=> {
    let newTodoList = [...todos]
    let completedTodo = todos[index] 
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
  }
  
  const handleDeleteTodo = (index)=> {
    let newTodoList = todos.filter((_ , valIndex)=> valIndex !== index)
    setTodos(newTodoList)
  }
  

  return (
    <>
      <Header todos={todos.length} />
      <Tabs tabActive={tabActive} setTabActive={setTabActive} todos={todos} />
      <TodoInput handleAddTask={handleAddTask}/>
      <TodoList tabActive={tabActive} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  );
}

export default App;
