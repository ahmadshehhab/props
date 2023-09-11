import logo from "./logo.svg";
import "./App.css";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
    <Parent/>
    </div>
  );
}

function MyFirstComponent() {
  return <h3>Hello World</h3>;
}

export default App;
