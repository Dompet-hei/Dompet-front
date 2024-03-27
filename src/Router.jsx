import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeaderFooter from "./pages/layouts/HeaderFooter";
import Error from "./pages/Error";
import UserContext from "./UserProvider";
import ChoseUser from "./pages/ChoseUser/";
import DebtsPage from "./pages/DebtsPage";
import MainProvider from "./MainProvider";
import SignUp from "./pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <MainProvider>
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
          <Route
            element={<UserContext children={<SignUp />} />}
            path="/signup"
          />
          <Route
            element={
              <UserContext
                children={<HeaderFooter children={<DebtsPage />} />}
              />
            }
            path="/debts"
          />
          <Route element={<Error />} path="*" />
        </Routes>
      </MainProvider>
    </BrowserRouter>
  );
};

export default Router;
