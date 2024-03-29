import { useContext } from "react";
import { UserContext } from "../UserProvider";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Divider,
  ModalBody,
  Button,
  Portal,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { MainContext } from "../MainProvider";
import useInput from "../hooks/useInput";
import { useState } from "react";

const AccountButton = ({ account, setInput }) => {
  return (
    <Flex>
      <Button
        h="3em"
        w="100%"
        justifyContent="start"
        onClick={() => {
          setInput(account.accountId);
        }}
      >
        Id: {account.accountId}
      </Button>
    </Flex>
  );
};

export default ({ useDisclosure }) => {
  const { availableAccounts, clientId } = useContext(UserContext);
  const [input, setInput] = useState("");
  const { idInput, setIdInput, loginAccount } = useContext(UserContext);

  useEffect(() => {
    loginAccount(input);
  }, [input]);

  useEffect(() => {
    console.log(availableAccounts);
  }, [availableAccounts]);

  return (
    <Modal isOpen={useDisclosure.isOpen} onClose={useDisclosure.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chose Your Account</ModalHeader>
        <ModalBody>
          <Flex gap="1em" direction="column" maxH="70vh" overflowX="hidden">
            {Array.isArray(availableAccounts) ? (
              availableAccounts.map((e) => (
                <AccountButton account={e} setInput={setInput} />
              ))
            ) : (
              <Portal>The client {clientId} have no account</Portal>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
