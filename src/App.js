import Header from './Header';
import TodosList from './TodosList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
