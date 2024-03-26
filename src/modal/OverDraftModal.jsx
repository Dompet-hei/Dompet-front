import TransactionModalTemplate from "./TransactionModalTemplate";

export default ({ useDisclosure }) => {
  return (
    <TransactionModalTemplate
      title="Borrow money"
      type="overdraft"
      useDisclosure={useDisclosure}
    />
  );
};
