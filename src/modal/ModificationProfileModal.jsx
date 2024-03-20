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
import { MainContext } from "../MainProvider";
import { UserContext } from "../UserProvider";

const ModificationProfileModal = ({ isOpen, onOpen, onClose }) => {
  const [input, onChangeInput, clearInput] = useInput(0);
  const {
    name,
    salary,
    firstName,
    onChangeName,
    onChangeSalary,
    onChangeFirstName,
    modifyAccount,
  } = useContext(UserContext);

  const { redirect } = useContext(MainContext);

  const handleSubmit = () => {
    modifyAccount();
    onClose();
    redirect("/");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Modify <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Divider w="80%" ml="10%" />
          <Flex direction="column">
            <input
              type="text"
              onChange={onChangeName}
              placeholder="Name"
              defaultValue={name}
            />
            <input
              type="text"
              onChange={onChangeFirstName}
              placeholder="First Name"
              defaultValue={firstName}
            />
            <input
              type="number"
              onChange={onChangeSalary}
              placeholder="Month Salary"
              defaultValue={salary}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModificationProfileModal;
