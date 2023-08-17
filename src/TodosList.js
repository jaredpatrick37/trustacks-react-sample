import { useEffect, useState } from 'react';
import NewTodo from './NewTodo';
import Todo from './Todo';
import './TodosList.css';


function TodosList() {
  const [todos, setTodos] = useState([]);

  const handleAddNewTodo = description => {
    console.log(description);
    todos.push({description: description, completed: false});
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos([...todos]);
  };

  const handleDeleteTodo = todoIndex => {
    let slice = todos.slice(0, todoIndex).concat(todos.slice(todoIndex+1, todos.length));
    localStorage.setItem("todos", JSON.stringify(slice));
    setTodos([...slice]);
  }

  const handleChangeCompleted = todoIndex => {
    todos[todoIndex].completed = !todos[todoIndex].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos([...todos]);
  }

  const renderTodos = () => {
    return todos.map((todo, index) => {
      return (
        <Todo 
          key={index}
          index={index}
          description={todo.description} 
          completed={todo.completed} 
          deleteTodo={handleDeleteTodo} 
          changeCompleted={handleChangeCompleted}
        />
      );
    });
  }

  useEffect(() => {
    const getTodos = () => {
      setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    }
    getTodos();
  }, []);
  
  return (
    <div className="TodosList">
      <NewTodo addNewTodo={handleAddNewTodo} />
      {renderTodos()}
    </div>
  );
}

export default TodosList;