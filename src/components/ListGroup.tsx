import { MouseEvent } from "react";

function ListGroup() {
  const places = [
    "New York",
    "San Francisco",
    "Silicon Valley",
    "Sturgeon Bay",
  ];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {places.length === 0 && <p>No place found</p>}
      <ul className="list-group">
        {places.map((place, index) => (
          <li key={place} className="list-group-item" onClick={handleClick}>
            {place}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
