import {
  Flex,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Stat,
  StatNumber,
  StatLabel,
  CardFooter,
  Tooltip,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import UserProprety from "./components/UserProprety";
import { useDisclosure } from "@chakra-ui/react";
import ModificationProfileModal from "../../modal/ModificationProfileModal";
import { useEffect } from "react";
import AccountAvatar from "../components/AccountAvatar";

const AboutUser = () => {
  const { name, id, balance, firstName, clientID } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {}, [name, id]);

  return (
    <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
      <Card maxW="md" h="auto">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">Weclome</Heading>
            <Flex minW="60em" gap={["2.5em", "1.5em", "3em"]}>
              <AccountAvatar name={name} onOpen={onOpen} />
              <ModificationProfileModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
              <Divider orientation="vertical" h="9em" />
              <Flex direction="column" gap="1em">
                <UserProprety id="Account" value={id} />
                <UserProprety id="Client" value={clientID} />
                <UserProprety id="Name" value={name} />
                <UserProprety id="First Name" value={firstName} />
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
