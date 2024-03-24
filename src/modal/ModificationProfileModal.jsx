import {
  Divider,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import useInput from "../hooks/useInput";
import { useContext } from "react";
import { UserContext } from "../UserProvider";
import ModifyForm from "./ModifyForm";

const ModificationProfileModal = ({ isOpen, onOpen, onClose }) => {
  const [input, onChangeInput, clearInput] = useInput(0);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Modify <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <ModifyForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModificationProfileModal;
