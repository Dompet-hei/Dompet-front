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
        <Table w="100%">
          <Thead>
            <Tr>
              <Th fontSize="1em">Over Draft</Th>
              <Th fontSize="1em">Over Draft value</Th>
              <Th fontSize="1em" textAlign="center">
                Interest
                <Th fontSize="1em">1 to 7</Th>
                <Th fontSize="1em">after 7</Th>
              </Th>
              <Th fontSize="1em">Limit Date</Th>
            </Tr>
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
