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
  StatHelpText,
  CardFooter,
  Tooltip,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import UserProprety from "./components/UserProprety";
import { useDisclosure } from "@chakra-ui/react";
import ModificationProfileModal from "../../modal/ModificationProfileModal";
import { useEffect } from "react";
import AccountAvatar from "../components/AccountAvatar";
import { opacityTheme, theme } from "../../utils/color";
import useInput from "../../hooks/useInput";

const StatHover = ({ children, label }) => {
  return (
    <Stat
      transition="500ms"
      borderRadius=".5em"
      bgColor={theme.base}
      p=".2em"
      color={theme.dark}
      _hover={{
        bgColor: opacityTheme.base(0.2),
      }}
    >
      <StatLabel>{label}</StatLabel>
      {children}
    </Stat>
  );
};

const AboutUser = () => {
  const {
    name,
    id,
    balance,
    firstName,
    clientID,
    birthDate,
    getAbout,
    refreshValue,
  } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchBalance, onChangeSearchBalance] = useInput("");

  useEffect(() => {
    getAbout();
  }, [name, id]);

  useEffect(() => {
    refreshValue();
  }, []);

  return (
    <Flex justifyContent="center" wrap="wrap" h="100%" w="100%" gap="2em">
      <Card
        maxW="95%"
        h="auto"
        bgColor={opacityTheme.light(0.5)}
        boxShadow="md"
      >
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">You</Heading>
            <Flex minW="60em" gap={["2.5em", "1.5em", "3em"]}>
              <AccountAvatar name={name} onOpen={onOpen} />
              <ModificationProfileModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
              <Divider orientation="vertical" h="9em" />
              <Flex direction="column" gap="2em">
                <UserProprety id="Your Client Id" value={clientID} />
              </Flex>
              <Divider orientation="vertical" h="9em" />
              <Flex direction="column" gap="2em">
                <UserProprety id="Name" value={name} />
                <UserProprety id="First Name" value={firstName} />
                <UserProprety id="Birth Date" value={birthDate} />
              </Flex>
            </Flex>
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex w="20em" gap="1em">
            <StatHover label="Current Account">
              <StatHelpText>{id}</StatHelpText>
            </StatHover>
            <StatHover label="Current Balance">
              <StatNumber>{balance} Ar</StatNumber>
            </StatHover>
          </Flex>
        </CardFooter>
      </Card>
      <Card
        maxW="95%"
        w="70vw"
        h="10em"
        bgColor={opacityTheme.light(0.5)}
        boxShadow="md"
      >
        <Flex direction="row" justifyContent="center" gap="2em">
          <Heading fontSize="1.5em">Your money</Heading>
          <Input w="70%" type="date" onChange={onChangeSearchBalance} />
        </Flex>
        <Text fontSize="5em" pl="1em">
          {searchBalance}
        </Text>
      </Card>
    </Flex>
  );
};

export default AboutUser;
