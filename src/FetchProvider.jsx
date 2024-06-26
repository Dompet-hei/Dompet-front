import { createContext } from "react";
import { useToast } from "@chakra-ui/react";

export const FetchContext = createContext();

const BASE_URL = "http://localhost:8080";

export default ({ children }) => {
  const toast = useToast();

  var result;
  const fetchCommand = (url, method, body = null, def = (r) => r) => {
    return fetch(`${BASE_URL}${url}`, {
      method,
      body,
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
    })
      .then((r) => r.json())
      .then(def)
      .catch((err) => {
        toast({
          title: "Fetch error",
          description: String(err),
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        console.error(err);
      });
  };

  const verb = {
    get: (url, setters) =>
      fetchCommand(url, "GET", null, (r) => {
        result = r;
        if (Array.isArray(r)) {
          setters(r);
        } else {
          for (const setter in setters) {
            setters[setter](setter in (r || {}) ? r[setter] : "");
          }
        }
      }),
    post: (url, body) => fetchCommand(url, "POST", JSON.stringify(body)),
    put: (url, body) => fetchCommand(url, "PUT", JSON.stringify(body)),
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
