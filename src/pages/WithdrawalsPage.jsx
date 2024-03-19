import {
  Divider,
  Flex,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatDownArrow,
  Button,
} from "@chakra-ui/react";
import useInput from "../hooks/useInput";

const WithdrawalsPage = () => {
  const [input, onChangeInput, clearInput] = useInput(0);

  return (
    <Flex w="100%" fontSize="1.5em" direction="column" gap="3em" padding="2em">
      <Text>Remove move from your account</Text>
      <Divider w="80%" ml="10%" />
      <Flex w="100%" alignItems="center" justifyContent="center">
        <input
          type="range"
          defaultValue="0"
          w="100%"
          onChange={onChangeInput}
        />
        <Stat size="md">
          <StatLabel>
            Value
            <StatDownArrow />
          </StatLabel>
          <StatNumber>{input} Ar</StatNumber>
        </Stat>
      </Flex>
      <Button colorScheme="blue">Get Money</Button>
    </Flex>
  );
};

export default WithdrawalsPage;
