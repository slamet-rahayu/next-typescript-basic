import React, { ReactElement, useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import Layout from 'components/layout';

function App(): ReactElement {
  interface ITodo {
    task: string;
    isDone: boolean;
  }

  type Ttodo = ITodo;

  type Ttask = string;

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<Ttodo>({ task: '', isDone: false });

  const handleAddTodo = (): void => {
    setTodos((prev) => [...prev, todo]);
    setTodo({ task: '', isDone: false });
  };

  const handleRemoveTodo = (task: Ttask): void => {
    setTodos((prev) => prev.filter((e) => e.task !== task));
  };

  const handleSetDone = (index: number): void => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  return (
    <Box
      sx={{
        m: 4
      }}
    >
      <Box>
        <TextField
          size="small"
          placeholder="Add a todo"
          value={todo.task}
          onChange={(e) => setTodo({ task: e.target.value, isDone: false })}
          onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <IconButton onClick={handleAddTodo}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 2 }}>
        {todos.length > 0 ? (
          todos.map((tItem, tIndex) => (
            <Box>
              <Box>
                <Typography
                  sx={{ ml: 1, textDecoration: tItem.isDone ? 'line-through' : 'none' }}
                  variant="body1"
                >
                  - {tItem.task}
                  <IconButton onClick={() => handleRemoveTodo(tItem.task)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                  <IconButton onClick={() => handleSetDone(tIndex)}>
                    {tItem.isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                  </IconButton>
                </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ ml: 1 }} variant="body1">
              Todo is Empty
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;

// App.getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>;
// };
