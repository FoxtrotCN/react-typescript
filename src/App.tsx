import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";

function App() {
  // const items = ["New York", "San Francisco", "Silicon Valley", "Sturgeon Bay"];
  //
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisibility, setAlertVisibility] = useState(false);

  const [drink, setDrink] = useState({
    title: "Coca Cola",
    price: 0.99,
  });

  const handleDrink = () => {
    const newDrink = { ...drink };
    newDrink.price = 1;
    setDrink(newDrink);
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
      {/*{alertVisibility && (*/}
      {/*  <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>*/}
      {/*)}*/}
      {/*<Button color="success" onClick={() => setAlertVisibility(true)}>*/}
      {/*  Soy un boton*/}
      {/*</Button>*/}

      {/*<Like onClick={() => console.log("Clicked.")} />*/}
      {drink.price}
      <button onClick={handleDrink}>Count</button>
    </>
  );
}

export default App;
