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
import Row from "./components/Row";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import OverDraftModal from "../../modal/OverDraftModal";
import useList from "../../hooks/useList";
import { useContext } from "react";
import { FetchContext } from "../../FetchProvider";
import { UserContext } from "../../UserProvider";
import Graph from "./components/graph";

export default () => {
  const [transactions, setTransactions, ,] = useList();
  const useDisclosureDebts = useDisclosure();

  const { id } = useContext(UserContext);
  const { verb } = useContext(FetchContext);

  useEffect(() => {
    verb.get(`/account/${id}/transactions`, setTransactions);
  }, []);

  useEffect(() => {}, [transactions]);

  return (
    <Flex>
      <TableContainer w="50%">
        <Table w="100%" variant="striped" colorScheme="teal">
          <Thead>
            <Row
              content={{
                transactionId: "Transaction",
                amount: "Amount",
                description: "Description",
              }}
              fontSize="1em"
              head
            />
          </Thead>
          <Tbody>
            {Array.isArray(transactions) ? (
              transactions.map((e) => <Row key={e.transactionId} content={e} />)
            ) : (
              <></>
            )}
            <Row
              content={{
                transactionId: (
                  <Button
                    colorScheme="blue"
                    onClick={useDisclosureDebts.onOpen}
                  >
                    Add
                  </Button>
                ),
              }}
            />
          </Tbody>
        </Table>
      </TableContainer>
      <Graph content={transactions} />
      <OverDraftModal useDisclosure={useDisclosureDebts} />
    </Flex>
  );
};
