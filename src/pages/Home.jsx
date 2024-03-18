import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../UserProvider";

const Home = () => {
  const { name } = useContext(UserContext);

  return (
    <Flex bgColor="" w="100%" h="100%">
      {name}
    </Flex>
  );
};

export default Home;
