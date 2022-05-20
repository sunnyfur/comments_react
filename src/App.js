import "./App.css";
import AddComment from "./Components/AddComment";
import ListComments from "./Components/ListComments";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddComment></AddComment>
        <ListComments></ListComments>
      </header>
    </div>
  );
}

export default App;
