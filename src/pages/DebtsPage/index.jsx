import {
  Flex,
  Stat,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import Row from "./components/Row";
import { useDisclosure } from "@chakra-ui/react";
import WithdrawalsMessage from "../../modal/WithdrawalsModal";

const DebtsPage = () => {
  const { overdraft } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <TableContainer>
        <Table w="100%">
          <Thead>
            <Tr>
              <Th>OverDraft</Th>
              <Th>Limit Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {overdraft.map((e) => (
              <Row content={e} />
            ))}
            <Row
              content={{
                value: (
                  <Button colorScheme="blue" onClick={onOpen}>
                    Add
                  </Button>
                ),
              }}
            />
            <WithdrawalsMessage
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Tbody>
        </Table>
      </TableContainer>
      <Stat></Stat>
    </Flex>
  );
};

export default DebtsPage;
