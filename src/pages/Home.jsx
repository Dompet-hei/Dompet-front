import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../UserProvider";
import AboutUser from "./AboutUser/index.jsx";

const Home = () => {
  const { name } = useContext(UserContext);

  return (
    <Flex
      bgColor=""
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      padding="4em"
    >
      <AboutUser />
    </Flex>
  );
};

export default Home;
