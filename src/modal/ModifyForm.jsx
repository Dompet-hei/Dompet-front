import { useContext } from "react";
import { UserContext } from "../UserProvider";
import FormTemplate from "../pages/components/FormTemplate";

export default ({ onClose }) => {
  const {
    onChangeName,
    onChangeFirstName,
    onChangeSalary,
    onChangeIsActive,
    name,
    firstName,
    salary,
    isActive,
    modifyAccount,
  } = useContext(UserContext);

  const handleSubmit = () => {
    modifyAccount();
    onClose();
  };

  return (
    <FormTemplate
      listInput={[
        {
          label: "Name",
          props: {
            type: "text",
            name: "Name",
            placeholder: "Your Name",
            onChange: onChangeName,
            defaultValue: name,
          },
        },
        {
          label: "First Name",
          props: {
            type: "text",
            name: "first name",
            placeholder: "Your First Name",
            onChange: onChangeFirstName,
            defaultValue: firstName,
          },
        },
        {
          label: "Month Salary",
          props: {
            type: "number",
            name: "salary",
            placeholder: "Your Month Salary",
            onChange: onChangeSalary,
            defaultValue: salary,
          },
        },
        {
          label: "Activate (to get more money than you have)",
          useSwitch: true,
          props: {
            type: "checkbox",
            name: "activate",
            onChange: onChangeIsActive,
            defaultValue: isActive,
          },
        },
      ]}
      handleSubmit={handleSubmit}
      buttonLabel="Modify"
    />
  );
};
