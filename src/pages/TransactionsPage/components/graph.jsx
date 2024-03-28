import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/*const data2 = [
  { name: 'Jan', solde: 2015, crypto: 10 },
  { name: 'Feb', solde: 0, crypto: 100 },
  { name: 'Mar', solde: 2290, crypto: 0.1 },
  { name: 'Apr', solde: 2000, crypto: 50 },
  { name: 'May', solde: 2181, crypto: 20 },
  { name: 'Jun', solde: 2500, crypto: 2 },
  { name: 'Jul', solde: 2100, crypto: 31.56 }
]*/

export default ({ h, fullW, content }) => {
  useEffect(() => {
    console.log(content);
  });

  return (
    <Flex
      w="90%"
      h="90%"
      flexDir="column"
      justifyContent="space-evenly"
      alignItems="center"
      overflowY="hidden"
      overflowX="auto"
    >
      <Text fontSize="2em">History</Text>
      <LineChart
        width={fullW ? 800 : 500}
        height={400}
        data={
          Array.isArray(content) ? (
            content.map((e, i) => {
              return {
                accountId: e.recordDate,
                amount: e.amount,
              };
            })
          ) : (
            <></>
          )
        }
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="accountId" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" />
      </LineChart>
    </Flex>
  );
};
