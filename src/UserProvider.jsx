import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { MainContext } from "./MainProvider";
import useInput from "./hooks/useInput";
import useList from "./hooks/useList";
import { FetchContext } from "./FetchProvider";
import { useBoolean } from "usehooks-ts";
import { useDisclosure } from "@chakra-ui/react";

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
  const [availableAccounts, setAvailableAccounts] = useList([]);
  const [interest, setInterest] = useLocalStorage("interest", 0);
  const [interest2, setInterest2] = useLocalStorage("interest2", 0);
  const [bank, setBank] = useLocalStorage("bank", "");
  const [listCategory, setListCategory] = useList([]);
  const [listCategoryIncome, setListCategoryIncome] = useList([]);
  const [listCategoryExpense, setListCategoryExpense] = useList([]);

  const [nameInput, onChangeName] = useInput(name);
  const [firstNameInput, onChangeFirstName] = useInput(firstName);
  const [salaryInput, onChangeSalary] = useInput(salary);
  const [idInput, onChangeId, , setIdInput] = useInput(id);
  const [creationDateInput, onChangeCreationDate] = useInput(creationDate);
  const [birthDateInput, onChangeBirthDate] = useInput(birthDate);
  const isActiveInput = useBoolean(isActive);
  const [clientIdInput, onChangeClientId] = useInput(clientID);

  const interestDiscolure = useDisclosure();

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
    verb.put("/account", {
      accountId: id,
      monthlyNetSalary: salary,
      isActive: isActive,
      clientId: clientID,
      interestDay1to7: interest,
      interestAfter7: interest2,
    });
    setAllArgs(
      idInput,
      nameInput,
      firstNameInput,
      salaryInput,
      creationDateInput,
      birthDateInput,
      isActiveInput.value,
      clientIdInput,
    );
  };

  const allAccountUserOf = (client) => {
    verb.get(`/client/${client}/accounts`, setAvailableAccounts);
  };

  const loginAccount = (name) => {
    verb.get(`/account/${name ? name : idInput}`, {
      accountId: setId,
      creationDate: setCreationDate,
      monthlyNetSalary: setSalary,
      isActive: setIsActive,
      clientId: setClientId,
    });
  };

  const getAbout = () => {
    verb.get(`/account/${id}/about`, {
      lastName: setName,
      firstName: setFirstName,
      birthDate: setBirthDate,
      bankName: setBank,
      interestDay1to7: setInterest,
      interestAfter7: setInterest2,
    });
  };

  const getBalance = () => {
    verb.get(`/account/${id}/latestBalance`, {
      balance: setBalance,
    });
  };

  const postDepts = (value) => {
    verb.put(`/account/${id}/overdraft`, {
      overdraftId: `${id}-${Date.now()}`,
      accountId: id,
      overdraftAllowed: true,
      overdraftBalance: value,
      overdraftStartDate: new Date(),
      overdraftReimbursementDate: new Date(),
    });
  };

  const doTransaction = (value, description, idCategory) => {
    verb.put(`/account/${id}/transactions`, {
      transactionId: `${id}-${Date.now()}`,
      accountId: id,
      categoryId: idCategory,
      effectiveDate: new Date(),
      recordDate: new Date(),
      amount: value,
      description: description,
    });
  };

  const refreshValue = () => {
    verb.get(`/account/${id}/overdraft`, setOverdraft);
    getBalance();
    getAllCategory();
  };

  const createTransfer = () => {
    const transfer = `${id}-${Date.now()}`;
    verb.put(`/account/${id}/transfers`, {
      transferId: transfer,
      uniqueReference: transfer.substring(0, 20),
      senderAccountId: id,
      scheduledEffectiveDate: "2024-04-01",
      statusId: 1,
      description: "string",
      effectiveDate: "2024-04-01T16:06:51.583Z",
      recordDate: "2024-04-01T16:06:51.583Z",
      isInternal: true,
    });
    return transfer;
  };

  const createTransferReceive = (idTransfer, toSend, amount) => {
    verb.put(`/transferRecipient`, {
      id: {
        transferId: idTransfer,
        recipientAccountId: toSend,
      },
      amount: amount,
    });
  };

  const getAllCategory = () => {
    verb.get("/categories", setListCategory);
    verb.get("/categories/income", setListCategoryIncome);
    verb.get("/categories/expense", setListCategoryExpense);
  };

  const logoutAccount = () => {
    setIdInput(DEFAULT_USER);
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
  };

  useEffect(() => {
    if (!validatePage() && !isInPath("/chose")) {
      redirect("/chose");
    }
  }, []);

  useEffect(() => {
    refreshValue();
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
        birthDate,
        isActive,
        clientID,
        availableAccounts,
        interest,
        interest2,
        bank,
        listCategory,
        listCategoryIncome,
        listCategoryExpense,
        setName,
        setId,
        setBalance,
        setFirstName,
        setSalary,
        setCreationDate,
        setBirthDate,
        setIsActive,
        setClientId,
        setInterest,
        setInterest2,
        setBank,
        setListCategoryIncome,
        setListCategoryExpense,
        setListCategory,
        setAvailableAccounts,
        addOverdraft,
        setOverdraft,
        nameInput,
        onChangeName,
        idInput,
        onChangeId,
        setIdInput,
        firstNameInput,
        onChangeFirstName,
        salaryInput,
        onChangeSalary,
        creationDateInput,
        onChangeCreationDate,
        birthDateInput,
        onChangeBirthDate,
        isActiveInput,
        clientIdInput,
        onChangeClientId,
        loginAccount,
        logoutAccount,
        getAbout,
        modifyAccount,
        isEmptyUser,
        postDepts,
        getBalance,
        doTransaction,
        refreshValue,
        allAccountUserOf,
        createTransfer,
        createTransferReceive,
        getAllCategory,
        interestDiscolure,
      }}
    >
      {validatePage() ? children : <></>}
    </UserContext.Provider>
  );
};

export default UserProvider;
