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
  const [balances, setBalances, ,] = useList();

  const { id } = useContext(UserContext);
  const { verb } = useContext(FetchContext);

  useEffect(() => {
    verb.get(`/account/${id}/balance`, setBalances);
  }, []);

  useEffect(() => {}, [balances]);

  return (
    <Flex>
      <TableContainer w="50%">
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
    </Flex>
  );
};
