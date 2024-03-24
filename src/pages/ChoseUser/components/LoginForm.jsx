import { useContext } from "react";
import FormTemplate from "../../components/FormTemplate";
import { UserContext } from "../../../UserProvider";

export default () => {
  const { onChangeId, loginAccount } = useContext(UserContext);

  const handleSubmit = () => {
    loginAccount();
  };

  return (
    <FormTemplate
      listInput={[
        {
          isRequired: true,
          label: "Account",
          props: {
            type: "text",
            name: "account",
            placeholder: "Your Account ID",
            onChange: onChangeId,
          },
        },
      ]}
      handleSubmit={handleSubmit}
      buttonLabel="Login"
    />
  );
};
