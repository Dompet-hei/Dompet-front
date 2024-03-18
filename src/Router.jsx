import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeaderFooter from "./pages/layouts/HeaderFooter";
import Error from "./pages/Error";
import UserContext from "./UserProvider";
import ChoseUser from "./pages/ChoseUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <UserContext
              needRedirect={true}
              children={<HeaderFooter children={<Home />} />}
            />
          }
          path="/"
        />
        <Route
          element={<UserContext children={<ChoseUser />} />}
          path="/chose"
        />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
