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
  Input,
  Text,
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
import { useBoolean } from "usehooks-ts";
import useInput from "../../hooks/useInput";
import { opacityTheme, theme } from "../../utils/color";

export default () => {
  const [transactions, setTransactions, ,] = useList();
  const [startDate, onChangeStartDate, clearStartDate] = useInput(null);
  const [endDate, onChangeEndDate, clearEndDate] = useInput(null);

  const { id } = useContext(UserContext);
  const { verb } = useContext(FetchContext);

  useEffect(() => {
    verb.get(`/account/${id}/transactions`, setTransactions);
  }, []);

  useEffect(() => {}, [transactions]);

  return (
    <Flex direction="row" wrap="wrap">
      <TableContainer w="40%">
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
          </Tbody>
        </Table>
      </TableContainer>
      {startDate && endDate ? <></> : <Graph content={transactions} />}
      <Flex
        w="100%"
        h="7em"
        bgColor={opacityTheme.base(0.7)}
        justifyContent="space-evenly"
        alignItems="center"
        wrap="wrap"
      >
        <Text fontSize="1.5em">Create statement</Text>
        <Text>Between</Text>
        <Input w="25%" type="date" onChange={onChangeStartDate} />
        <Text>and</Text>
        <Input w="25%" type="date" onChange={onChangeEndDate} />
        {!startDate || !endDate ? (
          <></>
        ) : (
          <Button
            colorScheme="red"
            onClick={() => {
              clearStartDate();
              clearEndDate();
            }}
          >
            Clear
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
