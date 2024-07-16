import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="flex items-center justify-center flex-col w-full">
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
