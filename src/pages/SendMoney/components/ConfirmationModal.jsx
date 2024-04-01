import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Divider,
  ModalFooter,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import useInput from "../../../hooks/useInput";
import { useBoolean } from "usehooks-ts";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../UserProvider";

const ConfirmationModal = ({
  useDisclosure,
  title,
  toSend,
  transfer,
  setTransfer,
}) => {
  const [input, onChangeInput, clearInput] = useInput(0);
  const loading = useBoolean(true);

  const { createTransferReceive } = useContext(UserContext);

  useEffect(() => {
    toSend.map((e) => createTransferReceive(transfer, e.idToSend, e.amount));
    loading.setTrue();
  }, [transfer]);

  const handleSubmit = () => {
    setTransfer("");
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
