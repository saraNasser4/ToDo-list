import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  const todos =[
    { input: 'Hello? Add your first todo!', complete: true},
    { input: 'Get the groceries!', complete: false},
    { input: 'Learn how to web design', complete: false},
    { input: 'Hello? Add your first todo!', complete: true},
  ]


  return (
    <>
      <Header todos={todos.length} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
