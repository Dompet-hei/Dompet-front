import TransactionModalTemplate from "./TransactionModalTemplate";

export default ({ useDisclosure }) => {
  return (
    <TransactionModalTemplate
      title="Add money to your account"
      type="deposits"
      useDisclosure={useDisclosure}
    />
  );
};
