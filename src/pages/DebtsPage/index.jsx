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
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import Row from "./components/Row";
import { useDisclosure } from "@chakra-ui/react";
import WithdrawalsMessage from "../../modal/WithdrawalsModal";
import { useEffect } from "react";

const DebtsPage = () => {
  const { overdraft } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {}, [overdraft]);

  return (
    <Flex>
      <TableContainer>
        <Table w="100%" variant="striped" colorScheme="teal">
          <Thead>
            <Row
              content={{
                overdraftId: "Over Draft",
                overdraftBalance: "Over Draft value",
                overdraftReimbursementDate: "Limit Date",
              }}
              fontSize="1em"
              head
            />
          </Thead>
          <Tbody>
            {Array.isArray(overdraft) ? (
              overdraft.map((e) => <Row key={e.overdraftId} content={e} />)
            ) : (
              <></>
            )}
            <Row
              content={{
                overdraftId: (
                  <Button colorScheme="blue" onClick={onOpen}>
                    Add
                  </Button>
                ),
              }}
            />
          </Tbody>
        </Table>
      </TableContainer>
      <WithdrawalsMessage isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
};

export default DebtsPage;
