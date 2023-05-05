import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="flex flex-row justify-between content-center items-center m-10 font-semibold text-title font-roboto">
      <Link to="/">
        Lyhong.Dev
      </Link> 
      <div className="flex gap-7 text-nav font-medium">
        <Link to = "" className="hover:underline"> Home </Link>
        <Link to="/projects" className="hover:underline"> Project</Link>
        <Link to="/about" className="hover:underline"> About </Link>
        <Link to="/about" className="hover:underline"> Contact </Link>
      </div>
    </div>
  );
};
export default MainNavigation;
