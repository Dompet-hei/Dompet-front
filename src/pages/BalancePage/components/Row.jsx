import { Tr, Th, Tooltip } from "@chakra-ui/react";

const Row = ({ content, fontSize, head }) => {
  return (
    <Tr>
      <Th fontSize={fontSize}>{content.balanceId}</Th>
      <Th isNumeric fontSize={fontSize}>
        {content.balance}
        {head ? "" : " Ar"}
      </Th>
      <Th fontSize={fontSize}>{content.lastUpdated}</Th>
    </Tr>
  );
};

export default Row;
