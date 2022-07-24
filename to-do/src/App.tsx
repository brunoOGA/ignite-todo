import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./components/Task";
import { PlusCircle } from "phosphor-react";
import "./global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  completed: boolean;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: uuidv4(),
      completed: false,
      content: "Ir no mercado",
    },
    {
      id: uuidv4(),
      completed: false,
      content: "Estudar ingês",
    },
    {
      id: uuidv4(),
      completed: false,
      content: "Ir na acadêmia",
    },
    {
      id: uuidv4(),
      completed: false,
      content: "Estudar algoritmos",
    },
  ]);
  const [newTodoContent, setNewTodoContent] = useState("");

  function handleDeleteTodo(todoId: string) {
    const todosWithoutDeletedOne = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(todosWithoutDeletedOne);
  }

  function handleToggleTodo(todoId: string) {
    const updateTodos = todos;

    const todoIndex = updateTodos.findIndex((todo) => todo.id === todoId);

    console.log(todoIndex);
    updateTodos[todoIndex].completed = !updateTodos[todoIndex].completed;

    setTodos([...updateTodos]);
  }

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    setTodos([
      {
        id: uuidv4(),
        completed: false,
        content: newTodoContent,
      },
      ...todos,
    ]);

    setNewTodoContent("");
  }

  function handleNewTodoContentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTodoContent(event.target.value);
  }

  function handleNewTodoContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const totalOfTodos = todos.length;
  const totalOfTodosCompleted = todos.reduce((currentValue, todo) => {
    if (todo.completed) return currentValue + 1;
    return currentValue;
  }, 0);

  return (
    <>
      <Header />
      <main>
        <form className={styles.createForm} onSubmit={handleCreateNewTodo}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            name="todo"
            value={newTodoContent}
            onChange={handleNewTodoContentChange}
            onInvalid={handleNewTodoContentInvalid}
            required
          />
          <button type="submit">
            <span>Criar</span> <PlusCircle className={styles.iconButton} />
          </button>
        </form>
        <section>
          <div>
            <span>
              Tarefas criadas
              <span>{totalOfTodos}</span>
            </span>
          </div>
          <div>
            <span>
              Concluídas
              <span>
                {totalOfTodosCompleted} de {totalOfTodos}
              </span>
            </span>
          </div>
        </section>

        {todos.map((todo) => (
          <Task
            key={todo.id}
            content={todo.content}
            onDelete={() => handleDeleteTodo(todo.id)}
            onToggle={() => handleToggleTodo(todo.id)}
            status={todo.completed}
          />
        ))}
      </main>
    </>
  );
}

export default App;
