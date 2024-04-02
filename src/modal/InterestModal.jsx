import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Divider,
  Stat,
  StatLabel,
  StatDownArrow,
  StatNumber,
  ModalFooter,
  Button,
  StatHelpText,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../UserProvider";
import FormTemplate from "../pages/components/FormTemplate";
import { useEffect } from "react";
import useInput from "../hooks/useInput";

export default ({ useDisclosure }) => {
  const { interest, interest2, setInterest, setInterest2, modifyAccount } =
    useContext(UserContext);

  const [input1, onChangeInput1] = useInput(0);
  const [input2, onChangeInput2] = useInput(0);

  const handleSubmit = () => {
    modifyAccount();
    useDisclosure.onClose();
  };

  return (
    <Modal isOpen={useDisclosure.isOpen} onClose={useDisclosure.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Modify <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <FormTemplate
            listInput={[
              {
                label: "Interest between 1 and 7 day",
                props: {
                  type: "number",
                  name: "interest 1 to 7",
                  placeholder: "First interest",
                  onChange: onChangeInput1,
                  defaultValue: interest,
                },
              },
              {
                label: "Interest after 7 days",
                props: {
                  type: "number",
                  name: "long interest",
                  placeholder: "Second interest",
                  onChange: onChangeInput2,
                  defaultValue: interest2,
                },
              },
            ]}
            handleSubmit={handleSubmit}
            buttonLabel="Modify"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
