import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  // const items = ["New York", "San Francisco", "Silicon Valley", "Sturgeon Bay"];
  //
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <>
      {/*<ListGroup*/}
      {/*  items={items}*/}
      {/*  heading="Cities"*/}
      {/*  onSelectedItem={handleSelectedItem}*/}
      {/*/>*/}
      <Alert>
        This is a children <b>Alert</b>
      </Alert>
    </>
  );
}

export default App;
