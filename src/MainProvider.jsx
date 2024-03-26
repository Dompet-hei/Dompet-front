import { useContext } from "react";
import { createContext } from "react";
import FetchProvider from "./FetchProvider";
import { useNavigate } from "react-router-dom";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const navigate = useNavigate();

  const getPathEnd = () => {
    const listPath = window.location.href.split("/");
    return `/${listPath[listPath.length - 1]}`;
  };

  const redirect = (path) => {
    navigate(path);
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
      <FetchProvider>{children}</FetchProvider>
    </MainContext.Provider>
  );
};

export default MainProvider;
