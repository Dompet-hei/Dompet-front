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
import { useEffect } from "react";
import OverDraftModal from "../../modal/OverDraftModal";

const DebtsPage = () => {
  const { overdraft, interest, interest2 } = useContext(UserContext);
  const useDisclosureDebts = useDisclosure();

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
              overdraft.map((e) => (
                <Row
                  key={e.overdraftId}
                  content={{
                    ...e,
                    overdraftInterestDay1to7: interest,
                    overdraftInterestAfter7: interest2,
                  }}
                />
              ))
            ) : (
              <></>
            )}
            <Row
              content={{
                overdraftId: (
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
      <OverDraftModal useDisclosure={useDisclosureDebts} />
    </Flex>
  );
};

export default DebtsPage;
