import { Outlet } from "react-router-dom";
import NavBar from "../Components/UI/MainNavigation";

const RootPage = () => {
  return (
    <>
      <NavBar/>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootPage;
