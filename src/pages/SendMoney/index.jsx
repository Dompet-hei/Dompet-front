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
import useList from "../../hooks/useList";
import SendMoneyModal from "./components/SendMoneyModal";

import { opacityTheme, theme } from "../../utils/color.js";
import ConfirmationModal from "./components/ConfirmationModal.jsx";

const DebtsPage = () => {
  const [toSend, , appendToSend] = useList([]);
  const useDisclosureSend = useDisclosure();
  const confirmDisclosure = useDisclosure();

  useEffect(() => {}, [toSend]);

  return (
    <Flex direction="column" gap="2em">
      <TableContainer>
        <Table w="100%" variant="striped" colorScheme="teal">
          <Thead>
            <Row
              content={{
                idToSend: "Destination",
                amount: "Amount",
                description: "Description",
              }}
              fontSize="1em"
              head
            />
          </Thead>
          <Tbody>
            {Array.isArray(toSend) ? (
              toSend.map((e) => (
                <Row key={e.idToSend + Math.random()} content={e} />
              ))
            ) : (
              <></>
            )}
            <Row
              content={{
                idToSend: (
                  <Button colorScheme="blue" onClick={useDisclosureSend.onOpen}>
                    Add
                  </Button>
                ),
              }}
            />
          </Tbody>
        </Table>
      </TableContainer>
      <Flex
        h="25vh"
        w="25vh"
        justifyContent="center"
        alignItems="center"
        bgColor={opacityTheme.base(0.5)}
        borderRadius="1em"
        m="2em"
        gap=".5em"
      >
        <Button colorScheme="red" type="reset">
          Abord
        </Button>
        <Button
          colorScheme="blue"
          type="submit"
          onClick={confirmDisclosure.onOpen}
        >
          Send
        </Button>
      </Flex>
      <SendMoneyModal
        title="Send money to"
        type="send"
        useDisclosure={useDisclosureSend}
        addList={appendToSend}
      />
      <ConfirmationModal
        title="Confirm your transaction"
        type="Confirm"
        useDisclosure={confirmDisclosure}
        toSend={toSend}
      />
    </Flex>
  );
};

export default DebtsPage;
