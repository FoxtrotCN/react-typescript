import { useState } from "react";

function ListGroup() {
  const places = [
    "New York",
    "San Francisco",
    "Silicon Valley",
    "Sturgeon Bay",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {places.length === 0 && <p>No place found</p>}
      <ul className="list-group">
        {places.map((place, index) => (
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
