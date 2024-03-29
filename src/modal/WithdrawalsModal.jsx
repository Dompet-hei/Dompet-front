import TransactionModalTemplate from "./TransactionModalTemplate";

export default ({ useDisclosure }) => {
  return (
    <TransactionModalTemplate
      title="Remove money from your account"
      type="withdrawals"
      useDisclosure={useDisclosure}
    />
  );
};
