import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (!liked)
    return <AiFillHeart color="#ff6b81" size={100} onClick={toggle} />;
  return (
    <>
      <AiOutlineHeart size={100} onClick={toggle} />
    </>
  );
}

export default Like;
