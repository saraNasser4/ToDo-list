import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState } from "react";

function App() {
  const [todos, SetTodos] = useState([]);
  const [tabActive, setTabActive] =useState('Open')
  
  const handleAddTask = (newTask)=> {
    const newTodoList = [...todos, { input: newTask, complete: false}]
    SetTodos(newTodoList)
  }



  return (
    <>
      <Header todos={todos.length} />
      <Tabs tabActive={tabActive} setTabActive={setTabActive} todos={todos} />
      <TodoInput handleAddTask={handleAddTask}/>
      <TodoList tabActive={tabActive} todos={todos} />
    </>
  );
}

export default App;
