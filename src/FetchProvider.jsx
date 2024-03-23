import { useState } from "react";
import { createContext } from "react";

export const FetchContext = createContext();

const BASE_URL = "http://localhost:8080";

export default ({ children }) => {
  var result;
  const fetchCommand = (url, method, setters) => {
    fetch(`${BASE_URL}${url}`, {
      method: method,
      mode: "cors",
    })
      .then((r) => r.json())
      .then((r) => {
        result = r;
        for (const setter in setters) {
          setters[setter](setter in (r || {}) ? r[setter] : "");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  const verb = {
    get: (url, setters) => fetchCommand(url, "GET", setters),
    post: (url, setters) => fetchCommand(url, "POST", setters),
    put: (url, setters) => fetchCommand(url, "PUT", setters),
  };

  return (
    <FetchContext.Provider
      value={{
        verb,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};
