import { Outlet } from "react-router-dom";
import NavBar from "../Components/UI/MainNavigation";

const RootPage = () => {
  return (
    <>
      <NavBar/>
      <>
        <Outlet />
      </>
    </>
  );
};

export default RootPage;
