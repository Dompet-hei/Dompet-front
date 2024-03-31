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
import { useBoolean } from "usehooks-ts";
import { useEffect } from "react";
import { useState } from "react";

const ConfirmationModal = ({ useDisclosure, title, toSend }) => {
  const [input, onChangeInput, clearInput] = useInput(0);
  const loading = useBoolean(true);

  const [transfer, setTransfer] = useState("");

  const { createTransfer, createTransferReceive } = useContext(UserContext);

  useEffect(() => {
    setTransfer(createTransfer());
  }, []);

  useEffect(() => {
    toSend.map((e) => createTransferReceive(transfer, e));
    loading.setTrue();
  }, [transfer]);

  const handleSubmit = () => {
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
            <Text>Confirm Your transaction</Text>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Divider orientation="vertical" />
          <Button
            isLoading={loading.value}
            colorScheme="blue"
            onClick={handleSubmit}
            type="submit"
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
