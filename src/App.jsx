import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1>📝 Simple To-Do List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Add</button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    marginLeft: "10px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};

export default App;
