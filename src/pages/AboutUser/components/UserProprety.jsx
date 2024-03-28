import { Text, Flex } from "@chakra-ui/react";
import { theme } from "../../../utils/color";

const UserProprety = ({ id, value }) => {
  return (
    <Flex gap="1em" alignItems="center" color={theme.dark}>
      <Text fontSize="1.5em" textAlign="center">{`${id || "key"} : `}</Text>
      <Text fontSize="1em" textAlign="center">
        {value || "value"}
      </Text>
    </Flex>
  );
};

export default UserProprety;
