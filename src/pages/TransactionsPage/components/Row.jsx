import { Tr, Th, Tooltip } from "@chakra-ui/react";

const Row = ({ content, fontSize, head }) => {
  return (
    <Tr>
      <Th fontSize={fontSize}>{content.transactionId}</Th>
      <Th isNumeric fontSize={fontSize}>
        {content.amount}
        {head ? "" : " Ar"}
      </Th>
      <Th fontSize={fontSize}>{content.description}</Th>
    </Tr>
  );
};

export default Row;
