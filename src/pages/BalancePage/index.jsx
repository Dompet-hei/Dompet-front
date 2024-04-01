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
import PieGraph from "./components/pieGraph";
import useInput from "../../hooks/useInput";

export default () => {
  const [transactions, setTransactions, ,] = useList();
  const [startDate, onChangeStartDate, clearStartDate] = useInput(null);
  const [endDate, onChangeEndDate, clearEndDate] = useInput(null);
  const [balances, setBalances, ,] = useList();

  const { id } = useContext(UserContext);
  const { verb } = useContext(FetchContext);

  useEffect(() => {
    verb.get(`/account/${id}/transactions`, setTransactions);
    verb.get(`/account/${id}/balance`, setBalances);
  }, []);

  useEffect(() => {}, [balances, transactions]);

  return (
    <Flex wrap="wrap">
      <TableContainer w="40%">
        <Table w="100%" variant="striped" colorScheme="teal">
          <Thead>
            <Row
              content={{
                balanceId: "Balance",
                balance: "Amount",
                lastUpdated: "Date",
              }}
              fontSize="1em"
              head
            />
          </Thead>
          <Tbody>
            {Array.isArray(balances) ? (
              balances.map((e) => <Row key={e.balanceId} content={e} />)
            ) : (
              <></>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Graph content={balances} />
      <PieGraph content={transactions} />
    </Flex>
  );
};
