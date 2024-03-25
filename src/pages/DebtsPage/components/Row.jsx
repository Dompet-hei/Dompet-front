import { Tr, Th, Tooltip } from "@chakra-ui/react";

const Row = ({ content, fontSize, head }) => {
  return (
    <Tr>
      <Th fontSize={fontSize}>{content.overdraftId}</Th>
      <Th isNumeric fontSize={fontSize}>
        {content.overdraftBalance}
        {head ? "" : " Ar"}
      </Th>
      {head ? (
        <Th fontSize={fontSize} colSpan={2}>
          <Tooltip label="before 7 days | after 7 days">Interest</Tooltip>
        </Th>
      ) : (
        <>
          <Th isNumeric fontSize={fontSize}>
            {content.overdraftInterestDay1to7}
          </Th>
          <Th isNumeric fontSize={fontSize}>
            {content.overdraftInterestAfter7}
          </Th>
        </>
      )}
      <Th fontSize={fontSize}>{content.overdraftReimbursementDate}</Th>
    </Tr>
  );
};

export default Row;
