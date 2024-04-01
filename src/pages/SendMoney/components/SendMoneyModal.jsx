import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Divider,
  Stat,
  StatLabel,
  StatDownArrow,
  StatNumber,
  ModalFooter,
  Button,
  Flex,
  Text,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import useInput from "../../../hooks/useInput";
import { UserContext } from "../../../UserProvider";
import useList from "../../../hooks/useList";
import { FetchContext } from "../../../FetchProvider";
import { useEffect } from "react";

const SendMoneyModal = ({ useDisclosure, title, type, addList }) => {
  const [input, onChangeInput, clearInput] = useInput(0);
  const [id, onChangeId, clearId] = useInput("None");
  const [accounts, setAccounts] = useList([]);
  const toast = useToast();

  const { balance, postDepts, doTransaction } = useContext(UserContext);
  const { verb } = useContext(FetchContext);

  const handleSubmit = () => {
    if (id == "None") {
      toast({
        title: "Bad input",
        description: "No account selected",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      addList({
        amount: input,
        idToSend: id,
      });
      useDisclosure.onClose();
    }
    clearId();
  };

  const getAllAccount = () => {
    verb.get("/account", setAccounts);
  };

  useEffect(() => {
    getAllAccount();
  }, []);

  useEffect(() => {}, [accounts]);

  return (
    <Modal isOpen={useDisclosure.isOpen} onClose={useDisclosure.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Flex direction="column" gap="2em">
            <Divider w="80%" ml="10%" />
            <Flex gap="2em">
              <Text>To Send</Text>
              <Select onChange={onChangeId} placeholder="None">
                {accounts.map((a) => (
                  <option
                    key={`chose-${a.accountId}`}
                    value={a.accountId}
                    children={a.accountId}
                  />
                ))}
              </Select>
            </Flex>
            <Stat p="1em">
              <StatLabel>
                Value
                <StatDownArrow />
              </StatLabel>
              <StatNumber>
                <Input type="number" value={input} onChange={onChangeInput} />{" "}
                Ar
              </StatNumber>
            </Stat>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Divider orientation="vertical" />
          <Button colorScheme="blue" onClick={handleSubmit} type="submit">
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SendMoneyModal;
