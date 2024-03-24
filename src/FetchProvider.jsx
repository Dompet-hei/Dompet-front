import { useState } from "react";
import { createContext } from "react";

export const FetchContext = createContext();

const BASE_URL = "http://localhost:8080";

export default ({ children }) => {
  var result;
  const fetchCommand = (url, method, body = null, def = (r) => r) => {
    fetch(`${BASE_URL}${url}`, {
      method,
      body: body ? JSON.stringify(body) : body,
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
    })
      .then((r) => r.json())
      .then(def)
      .catch((err) => {
        console.log(err);
      });
  };

  const verb = {
    get: (url, setters) =>
      fetchCommand(url, "GET", null, (r) => {
        result = r;
        for (const setter in setters) {
          setters[setter](setter in (r || {}) ? r[setter] : "");
        }
      }),
    post: (url) => fetchCommand(url, "POST"),
    put: (url, body) => fetchCommand(url, "PUT", body),
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
