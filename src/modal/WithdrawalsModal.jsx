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
import {
  Stat,
  StatLabel,
  StatNumber,
  StatDownArrow,
  StatHelpText,
} from "@chakra-ui/react";

import useInput from "../hooks/useInput";
import { useContext } from "react";
import { MainContext } from "../MainProvider";

const WithdrawalsModal = ({ isOpen, onOpen, onClose }) => {
  const [input, onChangeInput, clearInput] = useInput(0);

  const { redirect } = useContext(MainContext);

  const handleSubmit = () => {
    alert(`send money value: ${input}`);
    onClose();
    redirect("/");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Remove move from your account</ModalHeader>
        <ModalBody>
          <Divider w="80%" ml="10%" />
          <Stat p="1em">
            <StatLabel>
              Value
              <StatDownArrow />
            </StatLabel>
            <StatNumber>
              <input type="number" value={input} onChange={onChangeInput} /> Ar
            </StatNumber>
            <StatHelpText p="2em">
              <input
                type="range"
                defaultValue="0"
                onChange={onChangeInput}
                style={{ width: "100%" }}
                value={input}
              />
            </StatHelpText>
          </Stat>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={onClose}>
            Abord
          </Button>
          <Divider orientation="vertical" />
          <Button colorScheme="blue" onClick={handleSubmit} type="submit">
            Get Money
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WithdrawalsModal;
