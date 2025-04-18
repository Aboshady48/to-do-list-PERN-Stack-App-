import InputTodo from "./Components/InputTodo"
import ListTodo from "./Components/ListTodo";
import './Style/App.css';

const App = () => {
  return (
    <div className="container">
      <InputTodo />
      <ListTodo />
    </div>
  );
}

export default App
