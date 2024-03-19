import {
  Flex,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Avatar,
  Stat,
  StatNumber,
  StatLabel,
  CardFooter,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import UserProprety from "./components/UserProprety";

const AboutUser = () => {
  const { name, id, balance } = useContext(UserContext);

  return (
    <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
      <Card maxW="md" h="auto">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">Weclome</Heading>
            <Flex w="md" gap={["2.5em", "1.5em", "3em"]}>
              <Avatar name={name} borderRadius="lg" mt="2em" />
              <Divider orientation="vertical" h="9em" />
              <Flex direction="column" gap="1em">
                <UserProprety id="id" value={id} />
                <UserProprety id="name" value={name} />
              </Flex>
            </Flex>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stat>
            <StatLabel>Current Balance</StatLabel>
            <StatNumber>{balance} Ar</StatNumber>
          </Stat>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default AboutUser;
