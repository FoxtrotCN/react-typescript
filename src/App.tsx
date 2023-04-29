import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Silicon Valley", "Sturgeon Bay"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </>
  );
}

export default App;
