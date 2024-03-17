import { Text, Flex } from "@chakra-ui/react";

const Error = ({ message, code }) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bgColor="blue"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="10em">{message ? message : "Error"}</Text>
    </Flex>
  );
};

export default Error;
