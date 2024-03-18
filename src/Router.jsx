import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeaderFooter from "./pages/layouts/HeaderFooter";
import Error from "./pages/Error";
import UserContext from "./UserProvider";

const Router = () => {
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route element={<HeaderFooter children={<Home />} />} path="/" />
          <Route element={<Error />} path="*" />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
};

export default Router;
