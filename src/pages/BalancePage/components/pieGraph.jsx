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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { theme } from "../../../utils/color";
import { useContext } from "react";
import { UserContext } from "../../../UserProvider";

export default ({ h, fullW, content }) => {
  const { listCategoryExpense } = useContext(UserContext);
  const data = Array.isArray(content)
    ? content.map((e) => {
        return {
          type: e.categoryId,
          amount: e.amount,
        };
      })
    : [];

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
      <Text fontSize="2em">Summary</Text>
      <PieChart
        width={500}
        height={400}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Pie
          data={data}
          dataKey="amount"
          fill={theme.base}
          labelLine={false}
          nameKey="type"
        />
        <Tooltip />
      </PieChart>
    </Flex>
  );
};
