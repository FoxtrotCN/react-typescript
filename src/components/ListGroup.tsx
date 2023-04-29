import { useState } from "react";

// This line defines the shape (interface) of the values or props our component is going to use.

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No place found</p>}
      <ul className="list-group">
        {items.map((place, index) => (
          <li
            key={place}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {place}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
