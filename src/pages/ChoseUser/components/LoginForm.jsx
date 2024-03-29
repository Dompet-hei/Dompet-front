import { useContext } from "react";
import FormTemplate from "../../components/FormTemplate";
import { UserContext } from "../../../UserProvider";

export default ({ onOpen }) => {
  const { onChangeClientId, clientIdInput, allAccountUserOf } =
    useContext(UserContext);

  const handleSubmit = () => {
    allAccountUserOf(clientIdInput);
    onOpen();
  };

  return (
    <FormTemplate
      listInput={[
        {
          isRequired: true,
          label: "Client",
          props: {
            type: "text",
            name: "account",
            placeholder: "Your Client ID",
            onChange: onChangeClientId,
          },
        },
      ]}
      handleSubmit={handleSubmit}
      buttonLabel="Login"
    />
  );
};
