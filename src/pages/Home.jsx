import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../UserProvider";
import AboutUser from "./AboutUser";

const Home = () => {
  const { name } = useContext(UserContext);

  return (
    <Flex bgColor="" w="100%" h="100%">
      <AboutUser />
    </Flex>
  );
};

export default Home;
