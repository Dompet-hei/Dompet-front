import { Tr, Th } from "@chakra-ui/react";

const Row = ({ content }) => {
  return (
    <Tr>
      <Th>{content.value}</Th>
      <Th>Limit Date</Th>
    </Tr>
  );
};

export default Row;
