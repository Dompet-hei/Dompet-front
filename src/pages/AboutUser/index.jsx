import {
  Flex,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import UserProprety from "./components/UserProprety";

const AboutUser = () => {
  const { name, id } = useContext(UserContext);

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
      </Card>
    </Flex>
  );
};

export default AboutUser;
