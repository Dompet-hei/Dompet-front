import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { MainContext } from "./MainProvider";
import useInput from "./hooks/useInput";
import { useState } from "react";
import useList from "./hooks/useList";

export const UserContext = createContext();

const DEFAULT_USER = "";
const DEFAULT_USER_NAME = "lorem";
const DEFAULT_USER_FIRST_NAME = "lorem";
const DEFAULT_USER_SALARY = 0;

const UserProvider = ({ children, needRedirect }) => {
  const [name, setName] = useLocalStorage("name", DEFAULT_USER_NAME);
  const [firstName, setFirstName] = useLocalStorage(
    "first_name",
    DEFAULT_USER_FIRST_NAME,
  );
  const [salary, setSalary] = useLocalStorage("salary", DEFAULT_USER_SALARY);
  const [id, setId] = useLocalStorage("id", DEFAULT_USER);
  const [balance, setBalance] = useLocalStorage("balance", 0);
  const [overdraft, addOverdraft] = useList();

  const [nameInput, onChangeName] = useInput(name);
  const [firstNameInput, onChangeFirstName] = useInput(firstName);
  const [salaryInput, onChangeSalary] = useInput(salary);
  const [idInput, onChangeId] = useInput(id);

  const { redirect, isInPath } = useContext(MainContext);

  const isEmptyUser = () => {
    return id == DEFAULT_USER;
  };

  const validatePage = () => {
    return !isEmptyUser() || !needRedirect;
  };

  const setAllArgs = (idValue, nameValue, firstNameValue, salaryValue) => {
    setName(nameValue);
    setId(idValue);
    setFirstName(firstNameValue);
    setSalary(salaryValue);
  };

  const modifyAccount = () =>
    setAllArgs(idInput, nameInput, firstNameInput, salaryInput);

  const loginAccount = modifyAccount;

  const logoutAccount = () =>
    setAllArgs(
      DEFAULT_USER,
      DEFAULT_USER_NAME,
      DEFAULT_USER_FIRST_NAME,
      DEFAULT_USER_SALARY,
    );

  useEffect(() => {
    if (!validatePage() && !isInPath("/chose")) {
      redirect("/chose");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        name,
        id,
        balance,
        overdraft,
        firstName,
        salary,
        setName,
        setId,
        setBalance,
        setFirstName,
        setSalary,
        addOverdraft,
        nameInput,
        onChangeName,
        idInput,
        onChangeId,
        firstNameInput,
        onChangeFirstName,
        salaryInput,
        onChangeSalary,
        loginAccount,
        logoutAccount,
        modifyAccount,
      }}
    >
      {validatePage() ? children : <></>}
    </UserContext.Provider>
  );
};

export default UserProvider;
