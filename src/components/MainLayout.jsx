import Navs from "./Navs";
import AppTitle from "./AppTitle";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />
      <Outlet/>
    </div>
  );
};
export default MainLayout;
