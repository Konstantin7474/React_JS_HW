import { Button, Card, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);

  const hanldeInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const dellTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TextField
        type="text"
        placeholder="Добавить новое дело"
        value={inputValue}
        onChange={hanldeInputChange}
        margin="0"
      />
      <Button onClick={addTodo} variant="contained" color="primary">
        Добавить
      </Button>
      <ul style={{ width:"250px" }}>
        {todos.map((todo) => (
          <Card key={todo.id} style={{ margin: "10px 0", padding: "10px" }}>
            <span>{todo.text}</span>
            <IconButton aria-label="delete" onClick={() => dellTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
