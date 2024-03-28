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
  AreaChart,
  Area,
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
      w="600px"
      h="500px"
      flexDir="column"
      justifyContent="space-evenly"
      alignItems="center"
      overflowY="hidden"
      overflowX="auto"
    >
      <Text fontSize="2em">History</Text>
      <AreaChart
        width={500}
        height={400}
        data={
          Array.isArray(content) ? (
            content.map((e, i) => {
              return {
                date: e.recordDate.split("T")[0],
                amount: e.amount,
              };
            })
          ) : (
            <></>
          )
        }
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorGr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopOpacity=".8"></stop>
            <stop offset="95%" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <XAxis dataKey="date" angle={50} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amount" fill="url(#colorGr)" />
      </AreaChart>
    </Flex>
  );
};
