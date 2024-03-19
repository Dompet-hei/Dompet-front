import { Text, Flex } from "@chakra-ui/react";

const UserProprety = ({ id, value }) => {
  return (
    <Flex gap="1em" alignItems="center">
      <Text fontSize="2em" textAlign="center">{`${id || "key"} : `}</Text>
      <Text textAlign="center">{value || "value"}</Text>
    </Flex>
  );
};

export default UserProprety;
