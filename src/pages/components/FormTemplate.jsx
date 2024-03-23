import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

export default ({ listInput, handleSubmit }) => {
  return (
    <VStack spacing={5}>
      {listInput.map((c, i) => {
        return (
          <FormControl isRequired={c.isRequired} key={`input${i}`}>
            <FormLabel>{c.label}</FormLabel>
            <Input {...c.props} />
          </FormControl>
        );
      })}

      <Button
        type="submit"
        colorScheme="blue"
        bg="blue.400"
        color="white"
        _hover={{
          bg: "blue.500",
        }}
        width="full"
      >
        Connect
      </Button>
    </VStack>
  );
};
