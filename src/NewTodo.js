
import { useCallback, useState } from 'react';
import './NewTodo.css';

function NewTodo({addNewTodo}) {
  const [description, setDescription] = useState("");

  const resetInputValue = () => {
    setDescription("");
  }

  const submitOnEnter = useCallback((e) => {
    if ((e.code) === "Enter") {
      addNewTodo(e.target.value);
      resetInputValue();
    };
  }, [addNewTodo]);

  const handleChange = (e) => setDescription(e.target.value); 
  const handleFocus = () => {window.addEventListener("keydown", submitOnEnter, true)};
  const handleBlur = () => {window.removeEventListener("keydown", submitOnEnter, true)};

  return (
    <div className="NewTodo">
      <input 
        type="text" 
        placeholder="Add New Todo" 
        value={description} 
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default NewTodo;