import './Todo.css';

function Todo(props) {
  const handleToggleCompleted = () => {
    props.changeCompleted(props.index);
  }

  const handleDelete = () => {
    props.deleteTodo(props.index);
  }

  return (
    <div className="Todo">
      <input 
        onClick={handleToggleCompleted} 
        className="CompleteCheckbox" 
        type="checkbox" 
        defaultChecked={props.completed} 
      />
      <span className="Description" data-completed={props.completed}>{props.description}</span>
      <button onClick={handleDelete} className="Delete">
        <svg viewBox="0 0 1024 1024">
          <path d="m724.9 952.2h-423c-22.1 0-40.4-17.1-41.9-39.2l-36.3-539.6c-1.6-24.3 17.6-44.8 41.9-44.8h495.6c24.3 0 43.5 20.6 41.9 44.8l-36.3 539.6c-1.5 22.1-19.8 39.2-41.9 39.2zm119.6-702.3h-657c-.6 0-1-.4-1-1v-114.9c0-.6.4-1 1-1h657c.6 0 1 .4 1 1v114.8c0 .6-.4 1.1-1 1.1z"/>
          <path d="m690.9 189.5h-351.1c-.6 0-1-.4-1-1v-130.6c0-.6.4-1 1-1h351.1c.6 0 1 .4 1 1v130.6c0 .5-.4 1-1 1z"/>
        </svg>
      </button>
    </div>
  )
}

export default Todo;