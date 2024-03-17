import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeaderFooter from "./pages/layouts/HeaderFooter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderFooter children={<Home />} />} path="/home" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
