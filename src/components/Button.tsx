import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <>
      <button color={color} onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </>
  );
}

export default Button;
