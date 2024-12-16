import { useState } from "react";
import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/api/todosApi";

const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  // const { data: todos, isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId((todoId) => todoId - 1);
  };
  const nextTodo = () => {
    setTodoId((todoId) => todoId + 1);
  };

  return (
    <div>
      <h1>Todos - RKT Query</h1>
      <hr />
      <span>isLoading: {isLoading ? "True" : "False"}</span>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <b>{todo.completed ? "Done" : "Pending"}</b> {todo.title}
            </li>
          );
        })}
      </ul> */}
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </div>
  );
};

export default TodoApp;
