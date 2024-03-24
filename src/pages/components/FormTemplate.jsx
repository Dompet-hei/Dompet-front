import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Switch,
} from "@chakra-ui/react";

export default ({ listInput, handleSubmit, buttonLabel }) => {
  return (
    <VStack spacing={5}>
      {listInput.map((c, i) => {
        return (
          <FormControl isRequired={c.isRequired} key={`input${i}`}>
            <FormLabel>{c.label}</FormLabel>
            {c.useSwitch ? <Switch {...c.props} /> : <Input {...c.props} />}
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
        onClick={handleSubmit}
      >
        {buttonLabel}
      </Button>
    </VStack>
  );
};
