import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";

export default () => {
  const { onChangeName, onChangeId, loginAccount, IdInput } =
    useContext(UserContext);

  const handleSubmit = () => {
    loginAccount();
  };

  return (
    <VStack spacing={5}>
      <FormControl isRequired>
        <FormLabel>Account</FormLabel>
        <Input
          type="text"
          name="account"
          placeholder="Your Account"
          onChange={onChangeId}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={onChangeName}
        />
      </FormControl>

      <Button
        type="submit"
        colorScheme="blue"
        bg="blue.400"
        color="white"
        _hover={{
          bg: "blue.500",
        }}
        width="full"
        onClick={handleSubmit}
      >
        Connect
      </Button>
    </VStack>
  );
};
