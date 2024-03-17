import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeaderFooter from "./pages/layouts/HeaderFooter";
import Error from "./pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderFooter children={<Home />} />} path="/" />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
