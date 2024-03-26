import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { MainContext } from "./MainProvider";
import useInput from "./hooks/useInput";
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
  const [overdraft, setOverdraft, addOverdraft] = useList();
  const [creationDate, setCreationDate] = useLocalStorage(
    "creation_date",
    DEFAULT_CREATION_DATE,
  );
  const [birthDate, setBirthDate] = useLocalStorage(
    "birth-date",
    DEFAULT_CREATION_DATE,
  );
  const [isActive, setIsActive] = useLocalStorage("active", false);
  const [clientID, setClientId] = useLocalStorage("client-id", null);

  const [nameInput, onChangeName] = useInput(name);
  const [firstNameInput, onChangeFirstName] = useInput(firstName);
  const [salaryInput, onChangeSalary] = useInput(salary);
  const [idInput, onChangeId] = useInput(id);
  const [creationDateInput, onChangeCreationDate] = useInput(creationDate);
  const [birthDateInput, onChangeBirthDate] = useInput(birthDate);
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
    birthDateValue,
    isActiveVaue,
    clientIDValue,
  ) => {
    setName(nameValue);
    setId(idValue);
    setFirstName(firstNameValue);
    setSalary(salaryValue);
    setCreationDate(creationDateValue);
    setBirthDate(birthDateValue);
    setIsActive(isActiveVaue);
    setClientId(clientIDValue);
  };

  const modifyAccount = () => {
    verb.put("/client", {
      clientId: clientIdInput,
      lastName: nameInput,
      firstName: firstNameInput,
      birthDate: birthDateInput,
    });
    setAllArgs(
      idInput,
      nameInput,
      firstNameInput,
      salaryInput,
      creationDateInput,
      birthDateInput,
      isActiveInput,
      clientIdInput,
    );
  };

  const loginAccount = () => {
    verb.get(`/account/${idInput}`, {
      accountId: setId,
      creationDate: setCreationDate,
      monthlyNetSalary: setSalary,
      isActive: setIsActive,
      clientId: setClientId,
    });
  };

  const getAbout = () => {
    verb.get(`/client/${clientID}`, {
      lastName: setName,
      firstName: setFirstName,
      birthDate: setBirthDate,
    });
  };

  const getBalance = () => {
    verb.get(`/account/${id}/balance`, {
      balance: setBalance,
    });
  };

  const putDepts = (value) => {
    verb.put("/overdraft", {
      overdraftId: `${id}-${Date.now()}`,
      accountId: id,
      overdraftAllowed: true,
      overdraftBalance: value,
      overdraftStartDate: new Date(),
      overdraftReimbursementDate: new Date(),
      overdraftInterestDay1to7: 0,
      overdraftInterestAfter7: 0,
    });
  };

  const logoutAccount = () =>
    setAllArgs(
      DEFAULT_USER,
      DEFAULT_USER_NAME,
      DEFAULT_USER_FIRST_NAME,
      DEFAULT_USER_SALARY,
      DEFAULT_CREATION_DATE,
      DEFAULT_CREATION_DATE,
      false,
      null,
    );

  useEffect(() => {
    if (!validatePage() && !isInPath("/chose")) {
      redirect("/chose");
    }
  }, []);

  useEffect(() => {
    if (
      window.location.href.split("/").filter((e) => e == "chose").length !== 1
    ) {
      verb.get(`/account/${id}/overdraft`, setOverdraft);
      getBalance();
    }
  });

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
        birthDate,
        isActive,
        clientID,
        setName,
        setId,
        setBalance,
        setFirstName,
        setSalary,
        setCreationDate,
        setBirthDate,
        setIsActive,
        setClientId,
        addOverdraft,
        setOverdraft,
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
        birthDateInput,
        onChangeBirthDate,
        isActiveInput,
        onChangeIsActive,
        clientIdInput,
        onChangeClientId,
        loginAccount,
        logoutAccount,
        getAbout,
        modifyAccount,
        isEmptyUser,
        putDepts,
        getBalance,
      }}
    >
      {validatePage() ? children : <></>}
    </UserContext.Provider>
  );
};

export default UserProvider;
