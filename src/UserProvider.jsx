import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { MainContext } from "./MainProvider";
import useInput from "./hooks/useInput";

export const UserContext = createContext();

const DEFAULT_USER = "";
const DEFAULT_USER_NAME = "lorem";

const UserProvider = ({ children, needRedirect }) => {
  const [name, setName] = useLocalStorage("name", DEFAULT_USER_NAME);
  const [id, setId] = useLocalStorage("id", DEFAULT_USER);

  const [nameInput, onChangeName] = useInput(name);
  const [idInput, onChangeId] = useInput(id);

  const { redirect, isInPath } = useContext(MainContext);

  const isEmptyUser = () => {
    return id == DEFAULT_USER;
  };

  const validatePage = () => {
    return !isEmptyUser() || !needRedirect;
  };

  const loginAccount = () => {
    setName(nameInput);
    setId(idInput);
  };

  const logoutAccount = () => {
    setName(DEFAULT_USER_NAME);
    setId(DEFAULT_USER);
  };

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
        setName,
        setId,
        nameInput,
        onChangeName,
        idInput,
        onChangeId,
        loginAccount,
        logoutAccount,
      }}
    >
      {validatePage() ? children : <></>}
    </UserContext.Provider>
  );
};

export default UserProvider;
