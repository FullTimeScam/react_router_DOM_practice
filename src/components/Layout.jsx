import Navi from "./Navi";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navi />
      <Outlet />
    </>
  );
};

export default Layout;
