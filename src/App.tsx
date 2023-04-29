import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Silicon Valley", "Sturgeon Bay"];
  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;
