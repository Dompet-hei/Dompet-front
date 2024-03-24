import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { MainContext } from "./MainProvider";
import useInput from "./hooks/useInput";
import { useState } from "react";
import useList from "./hooks/useList";
import { FetchContext } from "./FetchProvider";

export const UserContext = createContext();

const DEFAULT_USER = "";
const DEFAULT_USER_NAME = "lorem";
const DEFAULT_USER_FIRST_NAME = "lorem";
const DEFAULT_USER_SALARY = 0;
const DEFAULT_CREATION_DATE = Date.UTC(2000, 1, 1);

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
  const [creationDate, setCreationDate] = useLocalStorage(
    "creation_date",
    DEFAULT_CREATION_DATE,
  );
  const [isActive, setIsActive] = useLocalStorage("active", false);
  const [clientID, setClientId] = useLocalStorage("client-id", 0);

  const [nameInput, onChangeName] = useInput(name);
  const [firstNameInput, onChangeFirstName] = useInput(firstName);
  const [salaryInput, onChangeSalary] = useInput(salary);
  const [idInput, onChangeId] = useInput(id);
  const [creationDateInput, onChangeCreationDate] = useInput(creationDate);
  const [isActiveInput, onChangeIsActive] = useInput(isActive);
  const [clientIdInput, onChangeClientId] = useInput(clientID);

  const { verb } = useContext(FetchContext);

  const { redirect, isInPath } = useContext(MainContext);

  const isEmptyUser = () => {
    return id == DEFAULT_USER;
  };

  const validatePage = () => {
    return !isEmptyUser() || !needRedirect;
  };

  const setAllArgs = (
    idValue,
    nameValue,
    firstNameValue,
    salaryValue,
    creationDateValue,
    isActiveVaue,
    clientIDValue,
  ) => {
    setName(nameValue);
    setId(idValue);
    setFirstName(firstNameValue);
    setSalary(salaryValue);
    setCreationDate(creationDateValue);
    setIsActive(isActiveVaue);
    setClientId(clientIDValue);
  };

  const modifyAccount = () =>
    setAllArgs(
      idInput,
      nameInput,
      firstNameInput,
      salaryInput,
      creationDateInput,
      isActiveInput,
      clientIdInput,
    );

  const loginAccount = () => {
    const result = verb.get(`/account/${idInput}`, {
      accountId: setId,
      creationDate: setCreationDate,
      monthlyNetSalary: setSalary,
      isActive: setIsActive,
      clientId: setClientId,
    });
  };

  const logoutAccount = () =>
    setAllArgs(
      DEFAULT_USER,
      DEFAULT_USER_NAME,
      DEFAULT_USER_FIRST_NAME,
      DEFAULT_USER_SALARY,
      DEFAULT_CREATION_DATE,
      false,
      null,
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
        creationDate,
        isActive,
        clientID,
        setName,
        setId,
        setBalance,
        setFirstName,
        setSalary,
        setCreationDate,
        setIsActive,
        setClientId,
        addOverdraft,
        nameInput,
        onChangeName,
        idInput,
        onChangeId,
        firstNameInput,
        onChangeFirstName,
        salaryInput,
        onChangeSalary,
        creationDateInput,
        onChangeCreationDate,
        isActiveInput,
        onChangeIsActive,
        clientIdInput,
        onChangeClientId,
        loginAccount,
        logoutAccount,
        modifyAccount,
        isEmptyUser,
      }}
    >
      {validatePage() ? children : <></>}
    </UserContext.Provider>
  );
};

export default UserProvider;
