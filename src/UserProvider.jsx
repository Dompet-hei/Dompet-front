import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { MainContext } from "./MainProvider";

export const UserContext = createContext();

const DEFAULT_USER = "";

const UserProvider = ({ children }) => {
  const [name, setName] = useLocalStorage("name", "lorem");
  const [id, setId] = useLocalStorage("id", DEFAULT_USER);

  const { redirect, isInPath } = useContext(MainContext);

  const isEmptyUser = () => {
    return id === DEFAULT_USER;
  };

  useEffect(() => {
    if (isEmptyUser && !isInPath("/chose")) {
      redirect("/chose");
    }
  });

  return (
    <UserContext.Provider
      value={{
        name,
        id,
        setName,
        setId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
