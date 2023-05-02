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

  const [tags, setTags] = useState(["Happy", "Sad"]);

  // Add

  const handleClickAdd = () => {
    setTags([...tags, "single"]);
    return tags;
  };

  const handleClickRemove = () => {
    setTags(tags.filter((tag) => tag !== "Happy"));
    return tags;
  };

  const handleClickUpdate = () => {
    setTags(tags.map((tag) => (tag === "Sad" ? "Sadness" : tag)));
    return tags;
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
      {tags.map((tag) => (
        <ul key={tag}>
          <li>{tag}</li>
        </ul>
      ))}
      <button onClick={handleClickAdd}>Add</button>
      <button onClick={handleClickRemove}>Remove</button>
      <button onClick={handleClickUpdate}>Update</button>
    </>
  );
}

export default App;
