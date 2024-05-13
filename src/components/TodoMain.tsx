import { useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function TodoMain() {
  const [todos, setTodos] = useState<string[]>([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    // axios api call
    const res = ["New todo 1", "New todo 2"];
    setTodos(res);

    return () => {
      setTodos([]);
    };
  }, []);

  const handleAddClick = () => {
    setShowAddTodo(true);
  };

  const handleSubmit = (title: string) => {
    setTodos([...todos, title]);
    setShowAddTodo(false);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      <div className="flex flex-grow items-center justify-center flex-col bg-gray-900 h-full">
        <h1 className="text-2xl text-gray-200 mb-4">Todo App</h1>

        <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
          <TodoHeader onAddClick={handleAddClick} />

          {showAddTodo ? (
            <TodoInput onSubmit={handleSubmit} />
          ) : (
            <ul>
              {todos.map((todo, index) => (
                <TodoItem key={index} title={todo} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
