import { Avatar } from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";
import { useHover } from "usehooks-ts";
import { MdChangeCircle } from "react-icons/md";

export default ({ name, onOpen }) => {
  const avatarRef = useRef(null);
  const isHovered = useHover(avatarRef);

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);

  return (
    <Avatar
      name={!isHovered ? name : ""}
      icon={isHovered ? <MdChangeCircle /> : <></>}
      fontSize="2em"
      borderRadius="lg"
      mt="2em"
      ref={avatarRef}
      onClick={onOpen}
    />
  );
};
