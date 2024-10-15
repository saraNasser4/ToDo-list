import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState } from "react";

function App() {
  // const todos =[
    //   { input: 'Get the groceries!', complete: false},
    //   { input: 'Learn how to web design', complete: false},
    //   { input: 'Hello? Add your first todo!', complete: true},
    // ]
    
  const [todos, SetTodos] = useState([]);

  const handleAddTask = (newTask)=> {
    const newTodoList = [...todos, { input: newTask, complete: false}]
    SetTodos(newTodoList)
  }

  return (
    <>
      <Header todos={todos.length} />
      <Tabs todos={todos} />
      <TodoInput handleAddTask={handleAddTask}/>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
