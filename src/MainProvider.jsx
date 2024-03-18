import { useContext } from "react";
import { createContext } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const getPathEnd = () => {
    const listPath = window.location.href.split("/");
    return `/${listPath[listPath.length - 1]}`;
  };

  const redirect = (path) => {
    window.location.href = path;
    return path;
  };

  const isInPath = (path) => {
    return getPathEnd() === path;
  };

  return (
    <MainContext.Provider
      value={{
        redirect,
        isInPath,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
