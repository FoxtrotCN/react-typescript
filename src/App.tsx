import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";
import ExpandedText from "./components/ExpandedText";

function App() {
  // const items = ["New York", "San Francisco", "Silicon Valley", "Sturgeon Bay"];
  //
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisibility, setAlertVisibility] = useState(false);

  // const [tags, setTags] = useState(["Happy", "Sad"]);

  // Add

  // const handleClickAdd = () => {
  //   setTags([...tags, "single"]);
  //   return tags;
  // };
  //
  // const handleClickRemove = () => {
  //   setTags(tags.filter((tag) => tag !== "Happy"));
  //   return tags;
  // };
  //
  // const handleClickUpdate = () => {
  //   setTags(tags.map((tag) => (tag === "Sad" ? "Sadness" : tag)));
  //   return tags;
  // };

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
      {/*{tags.map((tag) => (*/}
      {/*  <ul key={tag}>*/}
      {/*    <li>{tag}</li>*/}
      {/*  </ul>*/}
      {/*))}*/}
      {/*<button onClick={handleClickAdd}>Add</button>*/}
      {/*<button onClick={handleClickRemove}>Remove</button>*/}
      {/*<button onClick={handleClickUpdate}>Update</button>*/}

      <ExpandedText maxChars={50}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
        aperiam aut hic minus numquam perferendis velit veritatis vero. Ab
        accusamus adipisci animi atque autem blanditiis consequuntur culpa
        cupiditate debitis deserunt dicta doloribus ea eius esse facilis impedit
        ipsum iure labore modi nemo odio odit optio pariatur placeat quae quia
        quidem quo reprehenderit saepe, sint sit vitae voluptatem voluptatibus.
        Commodi consectetur id illo incidunt inventore, ipsa nemo officia
        pariatur provident quis ratione sapiente sint sit velit voluptatum?
        Nihil nisi quae repellendus. Aliquam architecto cum earum eos
        exercitationem, facere laudantium nemo nisi omnis perferendis quae
        quidem similique ullam velit veniam voluptatem!
      </ExpandedText>
    </>
  );
}

export default App;
