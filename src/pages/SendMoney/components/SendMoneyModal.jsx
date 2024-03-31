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
} from "@chakra-ui/react";
import { useContext } from "react";
import useInput from "../../../hooks/useInput";
import { UserContext } from "../../../UserProvider";

const SendMoneyModal = ({ useDisclosure, title, type, addList }) => {
  const [input, onChangeInput, clearInput] = useInput(0);
  const [id, onChangeId] = useInput("");

  const { balance, postDepts, doTransaction } = useContext(UserContext);

  const handleSubmit = () => {
    addList({
      amount: input,
      idToSend: id,
    });
    useDisclosure.onClose();
  };

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
              <Input type="text" placeholder="id" onChange={onChangeId} />
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
