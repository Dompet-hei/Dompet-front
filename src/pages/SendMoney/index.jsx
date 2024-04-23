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
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import Row from "./components/Row";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import useList from "../../hooks/useList";
import SendMoneyModal from "./components/SendMoneyModal";

import { opacityTheme, theme } from "../../utils/color.js";
import ConfirmationModal from "./components/ConfirmationModal.jsx";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserProvider.jsx";

const DebtsPage = () => {
  const [toSend, , appendToSend] = useList([]);
  const useDisclosureSend = useDisclosure();
  const confirmDisclosure = useDisclosure();

  const [transfer, setTransfer] = useState("");

  // const { createTransfer, createTransferReceive } = useContext(UserContext);
  const { handleTransfer } = useContext(UserContext);

  const handleClick = async () => {
    await handleTransfer(toSend);
    //   console.log(createTransfer())
    // setTransfer(createTransfer()).th;
    // setTimeout(()=>{
    // for (const send of toSend){
    //     console.log(transfer)
    //   createTransferReceive(transfer, send.idToSend, send.amount);
    // }
    // }, 2000)
    confirmDisclosure.onOpen();
  };

  useEffect(() => {}, [toSend]);

  return (
    <Flex direction="column" gap="2em">
      <TableContainer h="60vh" overflowY="auto">
        <Table w="100%" variant="striped" colorScheme="teal">
          <Thead>
            <Row
              content={{
                toSend: "Destination",
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
                <Row key={e.toSend + Math.random()} content={e} />
              ))
            ) : (
              <></>
            )}
            <Row
              content={{
                toSend: (
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
        w="100%"
        pr="1em"
        justifyContent="end"
        alignItems="center"
        bgColor={opacityTheme.base(0.5)}
        gap="1em"
      >
        <Flex justifyContent="center" alignItems="center" mx="3em">
          <Stat>
            <StatHelpText>Total Amount</StatHelpText>
            <StatNumber>
              {toSend.reduce((a, b) => a + Number(b.amount), 0)} Ar
            </StatNumber>
          </Stat>
        </Flex>
        <Button colorScheme="red" type="reset">
          Abord
        </Button>
        <Button colorScheme="blue" type="submit" onClick={handleClick}>
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
        transfer={transfer}
        setTransfer={setTransfer}
      />
    </Flex>
  );
};

export default DebtsPage;
