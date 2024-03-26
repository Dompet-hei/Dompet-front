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
  StatHelpText,
  Textarea,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../UserProvider";
import useInput from "../hooks/useInput";

const typeTrasaction = {
  deposits: "deposits",
  withdrawals: "withdrawals",
  overdraft: "overdraft",
};

export default ({ useDisclosure, title, type }) => {
  const [input, onChangeInput, clearInput] = useInput(0);
  const [description, onChangeDescription] = useInput("");

  const { balance, postDepts } = useContext(UserContext);

  const { doTransaction } = useContext(UserContext);

  const handleSubmit = () => {
    switch (type) {
      case typeTrasaction.deposits:
        doTransaction(input, description);
        break;
      case typeTrasaction.withdrawals:
        doTransaction(-input, description);
        break;
      case typeTrasaction.overdraft:
        postDepts(input);
        break;

      default:
        console.log(
          `Choice between ${typeTrasaction.deposits} and ${typeTrasaction.withdrawals} and ${typeTrasaction.overdraft}`,
        );
        break;
    }
    useDisclosure.onClose();
  };

  return (
    <Modal isOpen={useDisclosure.isOpen} onClose={useDisclosure.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Divider w="80%" ml="10%" />
          <Stat p="1em">
            <StatLabel>
              Value
              <StatDownArrow />
            </StatLabel>
            <StatNumber>
              <input type="number" value={input} onChange={onChangeInput} /> Ar
              {type == typeTrasaction.withdrawals ? (
                <StatHelpText p="2em">
                  <input
                    type="range"
                    onChange={onChangeInput}
                    style={{ width: "100%" }}
                    value={input}
                    max={balance}
                  />
                </StatHelpText>
              ) : (
                <></>
              )}
            </StatNumber>
            {type != typeTrasaction.overdraft ? (
              <StatNumber>
                Description
                <Textarea onChange={onChangeDescription} />
              </StatNumber>
            ) : (
              <></>
            )}
          </Stat>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={useDisclosure.onClose}>
            Abord
          </Button>
          <Divider orientation="vertical" />
          <Button colorScheme="blue" onClick={handleSubmit} type="submit">
            {type == typeTrasaction.withdrawals ? "Get Money" : ""}
            {type == typeTrasaction.deposits ? "Save Money" : ""}
            {type == typeTrasaction.overdraft ? "Borrow Money" : ""}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
