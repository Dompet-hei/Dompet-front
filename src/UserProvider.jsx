import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useLocalStorage("name", "lorem");
  const [id, setId] = useLocalStorage("id", "");

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

export default UserContext;
