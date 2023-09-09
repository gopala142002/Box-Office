import Navs from "./Navs";
import AppTitle from "./AppTitle";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Navs />
      <AppTitle />
      <Outlet/>
    </div>
  );
};
export default MainLayout;
