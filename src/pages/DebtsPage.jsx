import {
  Flex,
  Stat,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../UserProvider";

const DebtsPage = () => {
  const { overdraft } = useContext(UserContext);

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
              <Tr>
                <Th>{e.value}</Th>
                <Th>Limit Date</Th>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Stat></Stat>
    </Flex>
  );
};

export default DebtsPage;
