import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // const items = ["New York", "San Francisco", "Silicon Valley", "Sturgeon Bay"];
  //
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleAlertVisibility = () => {
    setAlertVisibility(true);
  };
  return (
    <>
      {/*<ListGroup*/}
      {/*  items={items}*/}
      {/*  heading="Cities"*/}
      {/*  onSelectedItem={handleSelectedItem}*/}
      {/*/>*/}
      {/*<Alert>*/}
      {/*  This is a children <b>Alert</b>*/}
      {/*</Alert>*/}
      {alertVisibility && <Alert>My Alert</Alert>}
      <Button color="success" onClick={handleAlertVisibility}>
        Soy un boton
      </Button>
    </>
  );
}

export default App;
