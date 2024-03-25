import { Tr, Th } from "@chakra-ui/react";

const Row = ({ content }) => {
  return (
    <Tr>
      <Th>{content.overdraftId}</Th>
      <Th>{content.overdraftBalance}</Th>
      <Th>
        <Th>{content.overdraftInterestDay1to7}</Th>
        <Th>{content.overdraftInterestAfter7}</Th>
      </Th>
      <Th>{content.overdraftReimbursementDate}</Th>
    </Tr>
  );
};

export default Row;
